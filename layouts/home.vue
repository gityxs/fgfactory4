<script setup>

    const localePath = useLocalePath()
    
    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
	var autoSaveInterval = null
	
	const handleBeforeUnload = () => {
	
		if (!appStore.resetInProgress) appStore.saveAppState()
		
		appStore.stopGameLoop()
		
		if (autoSaveInterval) clearInterval(autoSaveInterval)
		
		window.removeEventListener('beforeunload', handleBeforeUnload)		
	}
	
	setTimeout(() => {
	
		appStore.startApp()		
		appStore.startGameLoop()
		
		if (appStore.firstTime) appStore.showModal('modalWelcome')
		
		autoSaveInterval = setInterval(() => {	
			if (!appStore.resetInProgress) appStore.saveAppState()
		}, 30000)
		
		window.addEventListener('beforeunload', handleBeforeUnload)
		
    }, 2000)
	
</script>

<template>

	<modal-offline />
	<modal-welcome />
        
    <div v-if="appStore.loaded" class="w-100 h-100 d-flex flex-column">
    
        <div class="bg-dark">
            <div class="container">
                <div class="row g-2 align-items-center flex-nowrap">

                    <div class="col text-truncate">                
                        <div class="row g-2 align-items-center flex-nowrap">
                            <div class="col-auto"><img src="/favicon.ico" width="24" height="24" class="rounded" /></div>
                            <div class="col text-truncate"><span class="fs-5 text-white">{{ $t('game_title') }}</span></div>
                        </div>
                    </div>

					<div class="col-auto">
						<div class="dropdown">
						
							<button type="button" class="btn btn-danger" data-bs-toggle="dropdown" aria-expanded="false">
								<font-awesome-icon icon="fas fa-exclamation-triangle" fixed-width />
								<span class="d-none d-lg-inline ms-1">v {{ appStore.version }}</span>
							</button>

							<div class="dropdown-menu dropdown-menu-end p-2 text-bg-danger text-center">
								{{ $t('disclaimer_text') }}
							</div>

						</div>
					</div>

                    <div class="col-auto">
                        <div class="btn-group">
                            
                            <NuxtLink :to="localePath('/game')" class="btn btn-primary d-flex align-items-center" exactActiveClass="active">
                                <span class="ms-0"><font-awesome-icon icon="fas fa-gamepad" /></span>
                                <span class="ms-2 d-none d-md-block">{{ $t('page_game') }}</span>
                            </NuxtLink>
							
                            <NuxtLink :to="localePath('/options')" class="btn btn-primary d-flex align-items-center" exactActiveClass="active">
                                <span class="ms-0"><font-awesome-icon icon="fas fa-cog" /></span>
                                <span class="ms-2 d-none d-md-block">{{ $t('page_options') }}</span>
                            </NuxtLink>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div class="flex-grow-1 scroll-content">
            <slot />
        </div>
		
		<modal-victory />
        
    </div>
	<div v-else-if="appStore.error" class="w-100 h-100 d-flex align-items-center justify-content-center">
		
		<div class="container p-3" style="max-width:512px;">
			<div class="card">
			
				<div class="card-header">
					<div class="row gx-2 align-items-center justify-content-center">
						<div class="col-auto"><img src="/favicon.ico" width="24" height="24" class="rounded" /></div>
						<div class="col-auto"><span class="fs-5 text-white">{{ $t('game_title') }}</span></div>
					</div>
				</div>
				
				<div class="card-body">
					<div class="row g-2 justify-content-center">
						<div class="col-12 text-danger text-center fs-6">{{ $t('screenError_text') }}</div>
						<div class="col-12 text-center">{{ $t('screenError_info1') }}</div>
						<div class="col-5 col-lg-3">
							<a href="https://discord.gg/ZXrggavUpv" target="_blank" class="w-100 btn btn-secondary">
								<span><font-awesome-icon icon="fa-brands fa-fw fa-discord" /></span>
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
							<button type="button" class="w-100 btn btn-secondary" @click="appStore.exportAppState()">
								<font-awesome-icon icon="fas fa-fw fa-copy" />
								<span class="ms-2">{{ $t('screenError_exportSave') }}</span>
							</button>
						</div>
						<div class="col-5 col-lg-3">
							<button type="button" class="w-100 btn btn btn-secondary" @click="appStore.downloadAppState()">
								<font-awesome-icon icon="fas fa-fw fa-download" />
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
							<button type="button" class="w-100 btn btn-danger" @click="appStore.showModal('modalWipe')">
								<font-awesome-icon icon="fas fa-fw fa-skull" />
								<span class="ms-2">{{ $t('screenError_wipeSave') }}</span>
							</button>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
		<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">
			<toast-export />
		</div>
		
		<modal-wipe />
		
    </div>
	<div v-else class="w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="container p-3" style="max-width:320px;">
            <div class="card card-body">
                <div class="row g-2">
                
                    <div class="col-12">
                        <div class="row gx-2 align-items-center justify-content-center">
                            <div class="col-auto"><img src="/favicon.ico" width="24" height="24" class="rounded" /></div>
                            <div class="col-auto"><span class="fs-5 text-white">{{ $t('game_title') }}</span></div>
                        </div>
                    </div>

                    <div class="col-12 text-center">
                        <span class="flicker text-primary">{{ $t('screenLoading_text') }}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
