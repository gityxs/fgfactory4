import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

import LZString from 'lz-string'

import sfy_vanilla from '~/store/scenarios/sfy_vanilla.js'

import { useGameStore } from '~/store/gameStore.js'    

import { defineStore } from 'pinia'

export const useAppStore = defineStore({

    id: 'app-store',

    state: () => { return {
		
		collapsed: [],
		currentModalId: null,
        currentScenarioId: null,
		error: null,
		firstTime: true,
		gameTabId: 'milestones',
		isAppRunning: false,
		loaded: false,
		lastSavedTime: Date.now(),	
		localStorageName: 'fgfactory',
		loopInterval: null,
		offlineTime: 0,
		resetInProgress: false,
		version: 0.07,
		
        scenarios: [ sfy_vanilla ],
    }},
    
    getters: {
        
        localStorageData: (state) => { return localStorage.getItem(state.localStorageName) },

		isCollapsed: (state) => (group) => { return state.collapsed.includes(group) },
		
		currentScenario: (state) => { return state.scenarios.find(s => s.id == state.currentScenarioId) },
    },
    
    actions: {
		
		startApp() {
			
			if (this.loaded == true) return
			
			this.error = null
			this.loaded = false
			
			let gameStore = useGameStore()
			
			try {
				
				let loadedData = localStorage.getItem(this.localStorageName)
				if (loadedData && loadedData !== null && loadedData.length % 4 == 0) {
					
					let text = LZString.decompressFromBase64(loadedData)
					if (!text) throw 'Local data corrupted'
					loadedData = JSON.parse(text)
					
					console.log(loadedData)
					
					this.loadAppState(loadedData)
					
					let scenario = this.scenarios.find(s => s.id == this.currentScenarioId)
					gameStore.loadScenario(scenario)
					
					gameStore.loadGameState(loadedData)
				}
				else {
					
					this.currentScenarioId = this.scenarios[0].id
					
					let scenario = this.scenarios.find(s => s.id == this.currentScenarioId)
					gameStore.loadScenario(scenario)
				}
				
				this.computeOfflineProgress()
				
				this.loaded = true
			}
			catch (error) {
				
				this.error = error
				console.error(this.error)
			}
		},
		
		loadAppState(loadedData) {
			
			this.collapsed = loadedData.collapsed ?? this.collapsed
			this.currentScenarioId = loadedData.currentScenarioId ?? this.currentScenarioId
			this.firstTime = loadedData.firstTime ?? this.firstTime
			this.gameTabId = loadedData.gameTabId ?? this.gameTabId
			this.lastSavedTime = loadedData.lastSavedTime ?? this.lastSavedTime
		},
		
		computeOfflineProgress() {
			
			let currentTime = Date.now()
			let seconds = (currentTime - this.lastSavedTime) / 1000
			
            if (seconds > 15 * 60) {

				this.offlineTime = seconds
                this.showModal('modalOffline')
            }
			
			let gameStore = useGameStore()
			gameStore.computeOfflineProgress(seconds)
		},
		
		saveAppState() {
			
			this.lastSavedTime = Date.now()
			
			let appState = {}
			
			appState.collapsed = this.collapsed
			appState.currentScenarioId = this.currentScenarioId
			appState.firstTime = this.firstTime
			appState.gameTabId = this.gameTabId
			appState.lastSavedTime = this.lastSavedTime
			
			let gameStore = useGameStore()
			gameStore.saveGameState(appState)
			
			let text = JSON.stringify(appState)
			let compressed = LZString.compressToBase64(text)
			localStorage.setItem(this.localStorageName, compressed)
		},

        exportAppState() {
            
            navigator.clipboard.writeText(this.localStorageData)
            this.showToast('toastExport')
        },
		
        downloadAppState() {

            let node = document.createElement('a')
            node.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.localStorageData))
            node.setAttribute('download', this.localStorageName + '_save_' + (new Date).getTime() + '.txt')
            node.style.display = 'none'
            document.body.appendChild(node)

            node.click()

            document.body.removeChild(node)
        },

        importAppState() {

            let node = document.getElementById('importData')
            let importData = node.value.trim()
            
            if (!importData) return this.showToast('toastImportEmpty')
            if (importData.length % 4 !== 0) return this.showToast('toastImportCorrupted')
            
            this.resetInProgress = true
            
            localStorage.setItem(this.localStorageName, importData)
            window.location.replace('/fgfactory/game')
        },

        wipeAppState() {

            this.resetInProgress = true

            localStorage.removeItem(this.localStorageName)
            window.location.replace('/fgfactory/game')
        },
		
		startGameLoop() {
			
			if (this.isAppRunning) return
			this.isAppRunning = true
			
			let fps = 1 / 60
			let lastFrameTime = performance.now()
			let seconds = 0
			
			let AppLoop = () => {

				let gameStore = useGameStore()
				
				let currentTime = performance.now()
				
				let delta = (currentTime - lastFrameTime) / 1000
				seconds += delta
				
				if (seconds >= fps) {
					
					gameStore.doTick(fps)
					
					seconds -= fps
				}
				
				lastFrameTime = currentTime

				if (gameStore.isVictoryReached) {
				
					gameStore.doVictory()            
					this.showModal('modalVictory')
				}
			}
			
			this.loopInterval = setInterval(() => { AppLoop() }, fps * 1000)
		},
		
		stopGameLoop() {
			
			this.isAppRunning = false
			
			if (this.loopInterval) clearInterval(this.loopInterval)
		},

        showToast(toastElementId) {

            let node = document.getElementById(toastElementId)
            let toast = new bootstrap.Toast(node)
            toast.show()
        },
		
        showModal(modalElementId) {
			
			if (this.currentModalId == modalElementId) return
			this.currentModalId = modalElementId
			
            let node = document.getElementById(modalElementId)
            let modal = new bootstrap.Modal(node)
            modal.show()
        },
		
        toggleCollapsed(group) {
			
			if (this.isCollapsed(group)) {
				
				let index = this.collapsed.indexOf(group)
				this.collapsed.splice(index, 1)
			}
			else this.collapsed.push(group)
        },
    },
})
