import { defineStore } from 'pinia'

class Elem {

    constructor(data) {

        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
		
		this.unlocked = this.reqs ? false : true
		this.notified = false
		
		if (this.type == 'milestone') {
			
			this.max = this.max ? this.max : 1
			this.count = this.count ? this.count : 0
		}
		else if (this.type == 'power') {
			
			this.max = this.max ? this.max : Infinity
			this.count = this.count ? this.count : 0
		}
		else if (this.type == 'generator') {
			
			this.max = this.max ? this.max : Infinity
			this.count = this.count ? this.count : 0
		}
		else if (this.type == 'building') {
			
			this.max = this.max ? this.max : Infinity
			this.count = this.count ? this.count : 0
		}
		else if (this.type == 'item') {
			
			this.prod = this.prod ? this.prod : 0
			this.count = this.count ? this.count : 0
		}
		else if (this.type == 'storer') {
			
			this.mainId = Object.keys(this.storages)[0]
			this.assign.count = this.assign.count ? this.assign.count : 0
		}
		else if (this.type == 'producer') {
			
			this.mainId = Object.keys(this.outputs)[0]
			this.assign.count = this.assign.count ? this.assign.count : 0
		}
	}

    load(data) {
		
        if (data.assignCount) this.assign.count = data.assignCount
        if (data.count) this.count = data.count
        if (data.notified) this.notified = data.notified
        if (data.remainingSeconds) this.remainingSeconds = data.remainingSeconds
        if (data.selectCount) this.select.count = data.selectCount
        if (data.status) this.status = data.status        
	}
    
    getDataToSave() {
        
        let data = {}
		
        if (this.assign) data.assignCount = this.assign.count
        if (this.notified) data.notified = this.notified
        if (this.remainingSeconds) data.remainingSeconds = this.remainingSeconds
        if (this.select) data.selectCount = this.select.count
        if (this.status) data.status = this.status
        if (this.count) data.count = this.count
        if (this.id) data.id = this.id		
        
        return data
    }
}

export const useGameStore = defineStore({

    id: 'game-store',

    state: () => { return {
		
        elems: [],
		
		victory: false,
		victoryReqs: null,
    }},
    
    getters: {
        
		getElem: (state) => (id) => { return state.elems.find(e => e.id == id) },
        
		isVictoryReached: (state) => {
			
			if (state.victory) return false			
			if (state.victoryReqs && state.checkCounts(state.victoryReqs)) return true
			
			return false
		},
		
		getCosts: (state) => (elem) => {
			
			if (!elem.costs) return null
			
			let ret = {}
			
			for (let id in elem.costs)
				ret[id] = elem.costs[id] * elem.select.count
			
			return ret
		},
		
		getInputs: (state) => (elem) => {
						
			if (!elem.inputs) return null
			
			let ret = {}
			
			for (let id in elem.inputs)
				ret[id] = elem.inputs[id] * elem.select.count
			
			return ret
		},
		
		getOutputs: (state) => (elem) => {
						
			if (!elem.outputs) return null
			
			let ret = {}
			
			for (let id in elem.outputs)
				ret[id] = elem.outputs[id] * elem.select.count
			
			return ret
		},
		
		getResults: (state) => (elem) => {
						
			if (!elem.results) return null
			
			let ret = {}
			
			for (let id in elem.results)
				ret[id] = elem.results[id] * elem.select.count
			
			return ret
		},
		
		getUpgrades: (state) => (elem) => {
						
			if (!elem.upgrades) return null
			
			let ret = {}
			
			for (let id in elem.upgrades)
				ret[id] = elem.upgrades[id] * elem.select.count
			
			return ret
		},
		
		getStorages: (state) => (elem) => {
						
			if (!elem.storages) return null
			
			let ret = {}
			
			for (let id in elem.storages)
				ret[id] = elem.storages[id] * elem.select.count
			
			return ret
		},
		
		
        checkCounts: (state) => (counts) => {
            
            let check = true
            
            for (let id in counts) {
                
                let elem = state.getElem(id)
                if (elem.count < counts[id]) check = false
            }
            
            return check
        },

        checkProds: (state) => (prods) => {
            
            let check = true
            
            for (let id in prods) {
                
                let elem = state.getElem(id)
                if (elem.prod < prods[id]) check = false
            }
            
            return check
        },

        checkResults: (state) => (results) => {
            
            let check = true
            
            for (let id in results) {
                
                let elem = state.getElem(id)
                if (elem.count + results[id] > elem.max) check = false
            }
            
            return check
        },
		
        getAvailableCount: (state) => (elemId) => {
            
            let elem = state.getElem(elemId)
            let ret = elem.count

            let assignments = state.elems.filter(e => e.assign && e.assign.id == elemId && e.assign.count > 0)
            assignments.forEach(a => ret -= a.assign.count)
            
            return ret
        },

        checkAvailables: (state) => (availables) => {
            
            let check = true
            
            for (let id in availables) {
                
                let availableCount = state.getAvailableCount(id)
                if (availableCount < availables[id]) check = false
            }
            
            return check
        },
    },
    
    actions: {
		
		loadScenario(scenario) {
			
			this.elems = []
			
			this.victory = false
			this.victoryReqs = scenario.victoryReqs
			
            let elems = scenario.elems
            elems.forEach(e => {
                
                let newElem = new Elem(e)
                this.elems.push(newElem)
            })
			
			elems = this.elems.filter(e => e.mainId)
			elems.forEach(e => {
				
				let main = this.getElem(e.mainId)
				e.img = main.img
				e.name = main.name
			})
			
			let buildings = this.elems.filter(e => e.type == 'building')
			buildings.forEach(b => {
				
				let assignments = this.elems.filter(e => e.assign && e.assign.id == b.id)
				assignments.forEach(a => {
					
					a.reqs = b.reqs
					a.unlocked = false
				})
			})
		},
		
		loadGameState(loadedData) {
			
            if (loadedData.elems != null) loadedData.elems.forEach(loadedElem => {
        
                let elem = this.getElem(loadedElem.id)
                if (elem) elem.load(loadedElem)
            })
			
			let unlocks = this.elems.filter(e => e.reqs)
			unlocks.forEach(u => { u.unlocked = this.checkCounts(u.reqs) })
			
			let buildings = this.elems.filter(e => e.type == 'building' && e.count > 0)
			buildings.forEach(b => {
				
				let manuals = this.elems.filter(e => e.type == 'manual' && e.results[b.id] && e.inputs)
				manuals.forEach(m => {
					
					for (let id in m.inputs) {
						
						let elem = this.getElem(id)
						elem.prod -= m.inputs[id] * b.count
						elem.prod = Math.round(elem.prod * 100) / 100
					}
				})
			})
			
			let assignments = this.elems.filter(e => e.assign && e.assign.count > 0)
			assignments.forEach(a => {
				
				if (a.inputs) {
					for (let id in a.inputs) {
					
						let elem = this.getElem(id)
						elem.prod -= a.inputs[id] * a.assign.count
						elem.prod = Math.round(elem.prod * 100) / 100
					}
				}
				
				if (a.outputs) {
					for (let id in a.outputs) {
					
						let elem = this.getElem(id)
						elem.prod += a.outputs[id] * a.assign.count
						elem.prod = Math.round(elem.prod * 100) / 100
					}
				}
				
				if (a.storages) {
					for (let id in a.storages) {
					
						let elem = this.getElem(id)
						elem.max += a.storages[id] * a.assign.count
						elem.max = Math.round(elem.max * 100) / 100
					}
				}
			})
		
			this.victory = this.checkCounts(this.victoryReqs)
		},

		computeOfflineProgress(seconds) {
			
			this.doTick(seconds)
		},
		
		saveGameState(stateData) {
			
            stateData.elems = []
            this.elems.forEach(e => stateData.elems.push(e.getDataToSave()))
			
			stateData.victory = this.victory
		},
		
		doTick(seconds) {
			
            let manuals = this.elems.filter(e => e.status === 'started')
            manuals.forEach(m => {
                
                m.remainingSeconds -= seconds
                if (m.remainingSeconds <= 0) this.onBuild(m)
            })
			
            let productions = this.elems.filter(e => e.prod > 0 && e.count < e.max)
            productions.forEach(p => {
                
                p.count += p.prod * seconds				
                if (p.count >= p.max) p.count = p.max                    
            })
		},
		
		doVictory() {
			
			this.victory = true
		},

		onBuild(elem) {
			
			if (elem.status) {
				
				elem.status = 'waiting'
				elem.remainingSeconds = 0
			}
			
			let results = this.getResults(elem)
			if (results) {
				for (let id in results) {
					
					let result = this.getElem(id)
					if (result.count >= result.max) continue
					
					let count = results[id]						
					result.count += count
					if (result.count >= result.max) result.count = result.max
					result.count = Math.round(result.count * 100) / 100
				}
			}
			
			let unlocks = this.elems.filter(e => e.reqs)
			unlocks.forEach(unlock => { 
				
				let newUnlocked = this.checkCounts(unlock.reqs)
				if (newUnlocked != unlock.unlocked) {
					
					unlock.unlocked = newUnlocked
					unlock.notified = true 
				}
			})
		},
    },
})
