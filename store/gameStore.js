import { defineStore } from 'pinia'

class Elem {

    constructor(data) {

        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
		
		this.count = this.count ? this.count : 0
		this.max = this.max ? this.max : Infinity
		this.notified = false
		this.unlocked = this.reqs ? false : true
		
		if (this.assign) {
			
			if (!this.assign.count) this.assign.count = 0
			if (!this.select) this.select = { count:1, values:[ 1 ] }
		}
		
		if (this.build) {
			
			if (!this.build.status) this.build.status = 'waiting'
			if (!this.select) this.select = { count:1, values:[ 1 ] }
		}
	}

    load(data) {
		
        if (data.assignCount) this.assign.count = data.assignCount
        if (data.count) this.count = data.count
		if (data.notified) this.notified = data.notified
        if (data.remainingSeconds) this.build.remainingSeconds = data.remainingSeconds
        if (data.selectCount) this.select.count = data.selectCount
        if (data.status) this.build.status = data.status        
	}
    
    getDataToSave() {
        
        let data = {}

        if (this.assign) data.assignCount = this.assign.count
        if (this.build && this.build.remainingSeconds) data.remainingSeconds = this.build.remainingSeconds
        if (this.build && this.build.status) data.status = this.build.status
        if (this.count) data.count = this.count
        if (this.id) data.id = this.id
		if (this.notified) data.notified = this.notified
        if (this.select) data.selectCount = this.select.count
        
        return data
    }
}

export const useGameStore = defineStore({

    id: 'game-store',

    state: () => { return {
		
        elems: [],		
		victory: false,
    }},
    
    getters: {
        
		getElem: (state) => (id) => { return state.elems.find(e => e.id == id) },
        		
        checkElemCounts: (state) => (counts) => {
            
            let check = true
            
            for (let id in counts) {
                
                let elem = state.getElem(id)
                if (elem.count < counts[id]) check = false
            }
            
            return check
        },
        
        checkElemProds: (state) => (prods) => {
            
            let check = true
            
            for (let id in prods) {
                
                let elem = state.getElem(id)
                if (elem.prod < prods[id]) check = false
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
		
        getBuildCosts: (state) => (elem) => {
            
            if (elem.build && elem.build.costs) {
                
                let ret = {}
                
                for (let id in elem.build.costs) ret[id] = elem.build.costs[id] * elem.select.count
                
                return ret
            }
            
            return null
        },
        
        getBuildInputs: (state) => (elem) => {
            
            if (elem.build && elem.build.inputs) {
                
                let ret = {}
                
                for (let id in elem.build.inputs) ret[id] = elem.build.inputs[id] * elem.select.count
                
                return ret
            }
            
            return null
        },
		
        getBuildResults: (state) => (elem) => {
            
            if (elem.build && elem.build.result) {
                
                let ret = {}                
                ret[elem.id] = elem.build.result * elem.select.count
                
				if (elem.build.rewards) {					
					for (let id in elem.build.rewards) ret[id] = elem.build.rewards[id] * elem.select.count
				}
				
                return ret
            }
            
            return null
        },
		
        getAssignCosts: (state) => (elem) => {
            
            if (elem.assign && elem.assign.costs) {
                
                let ret = {}
                
                for (let id in elem.assign.costs) ret[id] = elem.assign.costs[id] * elem.select.count
                
                return ret
            }
            
            return null
        },
        
        getAssignInputs: (state) => (elem) => {
            
            if (elem.assign && elem.assign.inputs) {
                
                let ret = {}
                
                for (let id in elem.assign.inputs) ret[id] = elem.assign.inputs[id] * elem.select.count
                
                return ret
            }
            
            return null
        },
        
        getAssignOutputs: (state) => (elem) => {
            
            if (elem.assign && elem.assign.output) {
                
                let ret = {}
                ret[elem.assign.output.id] = elem.assign.output.count * elem.select.count
                
                return ret
            }
            
            return null
        },
        
        getAssignStorages: (state) => (elem) => {
            
            if (elem.assign && elem.assign.storage) {
                
                let ret = {}
                ret[elem.assign.storage.id] = elem.assign.storage.count * elem.select.count
                
                return ret
            }
            
            return null
        },
		
		isVictoryReached: (state) => {
			
			if (state.victory) return false
			if (state.terraformationIndex >= 5e12) return true
			
			return false
		},
    },
    
    actions: {
		
		loadScenario(scenario) {
			
            let elems = scenario.elems
            elems.forEach(e => {
                
                let newElem = new Elem(e)
                this.elems.push(newElem)
            })
		},
		
		loadGameState(loadedData) {
			
            if (loadedData.elems != null) loadedData.elems.forEach(loadedElem => {
        
                let elem = this.getElem(loadedElem.id)
                if (elem) elem.load(loadedElem)
            })
		
			this.victory = loadedData.victory ?? this.victory
			
			let unlocks = this.elems.filter(e => e.reqs)
			unlocks.forEach(unlock => { unlock.unlocked = this.checkElemCounts(unlock.reqs) })
			
			let assignments = this.elems.filter(e => (e.assign && e.assign.count > 0) || (e.build && e.build.inputs && e.count > 0))
			assignments.forEach(assignment => {
				
				if (assignment.build && assignment.build.inputs) {
					for (let id in assignment.build.inputs) {
					
						let elem = this.getElem(id)
						elem.prod -= assignment.build.inputs[id] * assignment.count
						elem.prod = Math.round(elem.prod * 100) / 100
					}
				}
				
				if (assignment.assign && assignment.assign.inputs) {
					for (let id in assignment.assign.inputs) {
					
						let elem = this.getElem(id)
						elem.prod -= assignment.assign.inputs[id] * assignment.assign.count
						elem.prod = Math.round(elem.prod * 100) / 100
					}
				}
				
				if (assignment.assign && assignment.assign.output) {
					
					let elem = this.getElem(assignment.assign.output.id)
					elem.prod += assignment.assign.output.count * assignment.assign.count
					elem.prod = Math.round(elem.prod * 100) / 100
				}
				
				if (assignment.assign && assignment.assign.storage) {
					
					let elem = this.getElem(assignment.assign.storage.id)
					elem.max += assignment.assign.storage.count * assignment.assign.count
				}
			})
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
			
            let buildings = this.elems.filter(elem => elem.build && elem.build.status === 'started')
            buildings.forEach(elem => {
                
                elem.build.remainingSeconds -= seconds
                if (elem.build.remainingSeconds <= 0) this.onBuild(elem)
            })
			
            let productions = this.elems.filter(elem => elem.prod > 0 && elem.count < elem.max)
            productions.forEach(elem => {
                
                elem.count += elem.prod * seconds				
                if (elem.count >= elem.max) elem.count = elem.max                    
            })
		},
		
		doVictory() {
			
			this.victory = true
		},
		
		onBuild(elem) {
			
			if (elem.build) {
				
				if (elem.build.status) elem.build.status = 'waiting'
				if (elem.build.remainingSeconds) elem.build.remainingSeconds = 0
			}
			
			let results = this.getBuildResults(elem)
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
			
			let unlocks = this.elems.filter(e => e.reqs && e.unlocked == false)
			unlocks.forEach(unlock => {
				
				unlock.notified = true
				unlock.unlocked = this.checkElemCounts(unlock.reqs)
			})			
		},
    },
})
