import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

import LZString from 'lz-string'

import sfy_vanilla from '~/store/scenarios/sfy_vanilla.js'
import fto_vanilla from '~/store/scenarios/fto_vanilla.js'

import { useGameStore } from '~/store/gameStore.js'    

import { defineStore } from 'pinia'

export const useAppStore = defineStore({

    id: 'app-store',

    state: () => { return {
		
		appStatus: 'starting',
		corrupted: false,
		currentModalId: null,
        currentScenarioId: null,
		firstTime: true,
		isAppRunning: false,
		lastSavedTime: Date.now(),	
		localStorageName: 'fgfactory',
		loopInterval: null,
		offlineTime: 0,
		resetInProgress: false,
		showCompleted: true,
		showLocked: false,
		sidebarOpen: false,
		version: 0.21,
		
        scenarios: [ sfy_vanilla, fto_vanilla ],
		completedScenarios: [],
    }},
    
    getters: {
        
        localStorageData: (state) => { return localStorage.getItem(state.localStorageName) },

		currentScenario: (state) => { return state.scenarios.find(s => s.id == state.currentScenarioId) },
    },
    
    actions: {
		
		startApp() {
			
			this.appStatus = 'starting'
			
			try {
				
				let loadedData = localStorage.getItem(this.localStorageName)
				if (loadedData && loadedData !== null) {
					
					if (loadedData.length % 4 != 0) {
						
						this.appStatus = 'corrupted'
						return
					}
					
					let text = LZString.decompressFromBase64(loadedData)
					if (!text) {
						
						this.appStatus = 'corrupted'
						return
					}
					
					loadedData = JSON.parse(text)					
					console.log(loadedData)
					
					if (!loadedData.version) {
						
						this.appStatus = 'corrupted'
						return
					}
					
					this.loadAppState(loadedData)
					
					let gameStore = useGameStore()
					
					let scenario = this.scenarios.find(s => s.id == this.currentScenarioId)
					gameStore.loadScenario(scenario)
					
					gameStore.loadGameState(loadedData)
					
					let index = this.completedScenarios.indexOf(scenario.id)
					if (index == -1 && gameStore.victory) this.completedScenarios.push(scenario.id)
					else if (index != -1 && !gameStore.victory) this.completedScenario.splice(index, 1)
				}
				else {
					
					this.currentScenarioId = this.scenarios[0].id
					
					let gameStore = useGameStore()
					
					let scenario = this.scenarios.find(s => s.id == this.currentScenarioId)
					gameStore.loadScenario(scenario)
				}
				
				this.computeOfflineProgress()
				
				this.lastSavedTime = Date.now()
				this.appStatus = 'started'
			}
			catch(error) {
				
				this.appStatus = 'error'
				console.error(error)
			}
		},
		
		loadAppState(loadedData) {
			
			this.completedScenarios = loadedData.completedScenarios ?? this.completedScenarios
			this.currentScenarioId = loadedData.currentScenarioId ?? this.currentScenarioId
			this.firstTime = loadedData.firstTime ?? this.firstTime
			this.lastSavedTime = loadedData.lastSavedTime ?? this.lastSavedTime
			this.showCompleted = loadedData.showCompleted ?? this.showCompleted
			this.showLocked = loadedData.showLocked ?? this.showLocked
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
			
			appState.completedScenarios = this.completedScenarios
			appState.currentScenarioId = this.currentScenarioId
			appState.firstTime = this.firstTime
			appState.lastSavedTime = this.lastSavedTime
			appState.showCompleted = this.showCompleted
			appState.showLocked = this.showLocked
			appState.version = this.version
			
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
            window.location.replace('/fgfactory')
        },

        wipeAppState() {

            this.resetInProgress = true

            localStorage.removeItem(this.localStorageName)
            window.location.replace('/fgfactory')
        },
		
		startGameLoop() {
			
			if (this.isAppRunning) return
			this.isAppRunning = true
			
			let fps = 1 / 60
			let lastFrameTime = performance.now()
			
			let AppLoop = () => {

				let gameStore = useGameStore()
				
				let currentTime = performance.now()
				
				let seconds = (currentTime - lastFrameTime) / 1000
				gameStore.doTick(seconds)
				
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
    },
})
