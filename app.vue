<script setup>

    const { t } = useI18n()

    useHead({	
        titleTemplate: (titleChunk) => {		
            return titleChunk ? t(titleChunk) + ' - ' + t('game_title') : t('game_title')
        }
    })
	
    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
	var autoSaveInterval = null
	
	const handleBeforeUnload = () => {
	
		if (!appStore.resetInProgress) appStore.saveAppState()
		
		appStore.stopGameLoop()
		
		if (autoSaveInterval) clearInterval(autoSaveInterval)
		
		window.removeEventListener('beforeunload', handleBeforeUnload)		
	}
	
	onMounted(() => {
		
		if (appStore.appStatus == 'started') return
		
		appStore.startApp()
		
		if (appStore.appStatus == 'started') {
		
			appStore.startGameLoop()
		
			if (appStore.firstTime) appStore.showModal('modalWelcome')
			
			autoSaveInterval = setInterval(() => {
				if (!appStore.resetInProgress) appStore.saveAppState()
			}, 30000)
			
			window.addEventListener('beforeunload', handleBeforeUnload)
		}
    })
	
	const handleExport = () => {
	
		appStore.exportAppState()
		appStore.showToast('toastExport')
	}
	
	const handleDownload = () => {
	
		appStore.downloadAppState()
	}
	
	const handleWipe = () => {
	
		appStore.showModal('modalWipe')
	}
	
</script>

<template>
    
	<div v-if="appStore.appStatus == 'started'" class="w-100 h-100">
	
		<NuxtLoadingIndicator color="#f89e1a" />
		
		<NuxtLayout>	
			<NuxtPage />
		</NuxtLayout>
		
	</div>

	<div v-else-if="appStore.appStatus == 'starting'" class="w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="container p-2" style="max-width:320px;">
            <div class="card card-body">
                <div class="row g-2">
                
                    <div class="col-12">
                        <div class="row gx-2 align-items-center justify-content-center">
						
                            <div class="col-auto">
								<img src="/favicon.png" width="24" height="24" class="rounded" />
							</div>
							
                            <div class="col-auto">
								<span class="fs-5 text-white">{{ $t('game_title') }}</span>
							</div>
							
                        </div>
                    </div>

                    <div class="col-12 text-center">
                        <span class="flicker text-primary">{{ $t('screenLoading_text') }}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>

	<div v-else-if="appStore.appStatus == 'error'" class="w-100 h-100 d-flex align-items-center justify-content-center">		
		<div class="container p-2" style="max-width:512px;">
            <div class="card">
			
				<div class="card-body">
					<div class="row gx-2 align-items-center justify-content-center">
					
						<div class="col-auto">
							<img src="/favicon.png" width="24" height="24" class="rounded" />
						</div>
						
						<div class="col-auto">
							<span class="fs-5 text-white">{{ $t('game_title') }}</span>
						</div>
						
					</div>
				</div>
			
				<div class="card-body text-center">
					<span class="text-danger fs-6">{{ $t('screenError_text') }}</span>
				</div>
					
				<div class="card-body">
					<div class="row g-2 justify-content-center">
					
						<div class="col-12 text-center">
							<span>{{ $t('screenError_info1') }}</span>
						</div>
						
						<div class="col-5 col-lg-3">
							<a href="https://discord.gg/ZXrggavUpv" target="_blank" class="w-100 btn btn-secondary">
								<font-awesome-icon icon="fa-brands fa-discord" />
								<span class="ms-2">Discord</span>
							</a>
						</div>
						
					</div>
				</div>
					
				<div v-if="appStore.localStorageData" class="card-body">
					<div class="row g-2 justify-content-center">
					
						<div class="col-12">
							<textarea spellcheck="false" rows="3" class="form-control" disabled readonly>{{ appStore.localStorageData }}</textarea>
						</div>
						
						<div class="col-5 col-lg-3">
							<button type="button" class="w-100 btn btn-secondary text-truncate" @click="handleExport">
								<font-awesome-icon icon="fas fa-copy" />
								<span class="ms-2">{{ $t('screenError_exportSave') }}</span>
							</button>
						</div>
						
						<div class="col-5 col-lg-3">
							<button type="button" class="w-100 btn btn btn-secondary text-truncate" @click="handleDownload">
								<font-awesome-icon icon="fas fa-download" />
								<span class="ms-2">{{ $t('screenError_downloadSave') }}</span>
							</button>
						</div>
						
					</div>
				</div>
					
				<div class="card-body">
					<div class="row g-2 justify-content-center">
					
						<div class="col-12 text-center">
							<span class="text-normal">{{ $t('screenError_info2') }}</span>
						</div>
						
						<div class="col-5 col-lg-3">
							<button type="button" class="w-100 btn btn-danger text-truncate" @click="handleWipe">
								<font-awesome-icon icon="fas fa-skull" />
								<span class="ms-2">{{ $t('screenError_wipeSave') }}</span>
							</button>
						</div>
					
					</div>
				</div>
				
			</div>
		</div>
    </div>

	<div v-else-if="appStore.appStatus == 'corrupted'" class="w-100 h-100 d-flex align-items-center justify-content-center">	
		<div class="container p-2" style="max-width:512px;">
			<div class="card">
				
				<div class="card-body">
					<div class="row gx-2 align-items-center justify-content-center">
					
						<div class="col-auto">
							<img src="/favicon.png" width="24" height="24" class="rounded" />
						</div>
						
						<div class="col-auto">
							<span class="fs-5 text-white">{{ $t('game_title') }}</span>
						</div>
						
					</div>
				</div>

				<div class="card-body text-center">
					<span class="text-danger fs-6">{{ $t('screenCorrupted_text') }}</span>
				</div>
				
				<div class="card-body">
					<div class="row g-2 justify-content-center">
					
						<div class="col-12 text-center">
							<span class="text-normal">{{ $t('screenCorrupted_info') }}</span>
						</div>
						
						<div class="col-5 col-lg-3">
							<button type="button" class="w-100 btn btn-danger" @click="handleWipe">
								<font-awesome-icon icon="fas fa-skull" />
								<span class="ms-2">{{ $t('screenCorrupted_wipeSave') }}</span>
							</button>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
    </div>

	<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">
		
		<toast-export />
		<toast-import-corrupted />
		<toast-import-empty />
		
	</div>

	<modal-offline />
	<modal-scenario />
	<modal-version />
	<modal-victory />
	<modal-welcome />
	<modal-wipe />
    
</template>
