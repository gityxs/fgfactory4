import { defineStore } from 'pinia'

class Elem {

    constructor(data) {

        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
		
		this.unlocked = this.reqs ? false : true
		this.notified = false
		
		if (this.assign) this.assign.count = 0
	}

    load(data) {
		
        if (data.assignCount) this.assign.count = data.assignCount
        if (data.count) this.count = data.count
        if (data.notified) this.notified = data.notified
        if (data.remainingSeconds) this.remainingSeconds = data.remainingSeconds
        if (data.status) this.status = data.status        
	}
    
    getDataToSave() {
        
        let data = {}
		
        if (this.assign) data.assignCount = this.assign.count
        if (this.notified) data.notified = this.notified
        if (this.remainingSeconds) data.remainingSeconds = this.remainingSeconds
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
		
		getCosts: (state) => (elem) => { return elem.costs },
		getInputs: (state) => (elem) => { return elem.inputs },
		getOutputs: (state) => (elem) => { return elem.outputs },
		getResults: (state) => (elem) => { return elem.results },
		getUpgrades: (state) => (elem) => { return elem.upgrades },
		getStorages: (state) => (elem) => { return elem.storages },
		
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
