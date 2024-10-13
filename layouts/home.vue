<script setup>

    const localePath = useLocalePath()

	const route = useRoute()
    
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
		
		if (appStore.loaded) {
		
			appStore.startGameLoop()
		
			if (appStore.firstTime) appStore.showModal('modalWelcome')
			
			autoSaveInterval = setInterval(() => {	
				if (!appStore.resetInProgress) appStore.saveAppState()
			}, 30000)
			
			window.addEventListener('beforeunload', handleBeforeUnload)
		}
		
    }, 1000)

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
	
	const pageTitle = computed(() => {
	
		if (route.meta.title) return route.meta.title
		else if (route.params.id && appStore.loaded) {
			
			let item = gameStore.elems.find(e => e.type == 'item' && e.id == route.params.id)
			return item.name
		}
		
		return ''
	})

	const pageImg = computed(() => {
	
		if (route.params.id && appStore.loaded) {
			
			let item = gameStore.elems.find(e => e.type == 'item' && e.id == route.params.id)
			return item.img
		}
		
		return null
	})
	
    useHead({ title: pageTitle })
	
	const readyMilestones = computed(() => {
	
		let ret = 0
	
		let milestones = gameStore.elems.filter(e => e.unlocked && e.type == 'milestone' && e.count < 1)
		milestones.forEach(m => {
			
			let manual = gameStore.elems.find(e => e.type == 'manual' && e.results[m.id])			
			let costs = gameStore.getCosts(manual)
			let checkCosts = gameStore.checkCounts(costs)
			if (checkCosts) ret += 1
		})
		
		return ret
	})
	
	const buildings = computed(() => gameStore.elems.filter(e => e.unlocked && e.type == 'building').length)
	const newBuildings = computed(() => gameStore.elems.filter(e => e.unlocked && e.notified && e.type == 'building').length)
	
	const groups = computed(() => [...new Set(gameStore.elems.filter(e => e.unlocked && e.type == 'item').map(e => e.group))])	
	
</script>

<template>

	<modal-offline />
	<modal-welcome />
        
    <div v-if="appStore.loaded" class="w-100 h-100 d-flex">

		<div id="sidebar" class="bg-dark border-end border-2 border-translucent" :class="{ 'open':appStore.sidebarOpen }">
			<div class="h-100 px-3 py-2 scroll-content">
				<div class="row g-3">
				
					<div class="col-12">
						<div class="row g-2 align-items-center justify-content-lg-center">
						
							<div class="col-auto"><img src="/favicon.png" width="24" height="24" class="rounded" /></div>
							<div class="col col-lg-auto"><span class="fs-5 text-white">{{ $t('game_title') }}</span></div>

							<div class="col-auto d-lg-none">
								<button type="button" class="btn btn-primary" @click="appStore.sidebarOpen = false;">
									<font-awesome-icon icon="fas fa-times" fixed-width />
								</button>
							</div>
							
						</div>
					</div>
					
					<div class="col-12">
						<div class="row g-1 justify-content-center">
							
							<div class="col-6">
								<NuxtLink :to="localePath('/milestones')" class="btn btn-primary position-relative d-flex align-items-center justify-content-center" exactActiveClass="active" @click="appStore.sidebarOpen = false;">
									<span class="ms-0"><font-awesome-icon icon="fas fa-check-circle" /></span>
									<span class="ms-2">{{ $t('page_milestones') }}</span>
									<div v-if="readyMilestones > 0" class="position-absolute top-0 end-0 lh-1 small text-success"><font-awesome-icon icon="fas fa-check-circle" /></div>
								</NuxtLink>
							</div>
							
							<div v-if="buildings > 0" class="col-6">
								<NuxtLink :to="localePath('/buildings')" class="btn btn-primary position-relative d-flex align-items-center justify-content-center" exactActiveClass="active" @click="appStore.sidebarOpen = false;">
									<span class="ms-0"><font-awesome-icon icon="fas fa-industry" /></span>
									<span class="ms-2">{{ $t('page_buildings') }}</span>
									<div v-if="newBuildings > 0" class="position-absolute top-0 start-0 lh-1 small text-success"><font-awesome-icon icon="fas fa-certificate" /></div>
								</NuxtLink>
							</div>
							
						</div>
					</div>

					<div v-for="group in groups" :key="group" class="col-12">
						<sidebar-group :group="group" />
					</div>
					
				</div>
			</div>
		</div>
	
		<div id="topbar" class="bg-dark border-bottom border-2 border-translucent">
			<div class="px-3 py-2">
				<div class="row g-2 align-items-center flex-nowrap">

					<div class="col-auto d-lg-none">
						<button type="button" class="btn btn-primary" @click="appStore.sidebarOpen = true;">
							<font-awesome-icon icon="fas fa-bars" fixed-width />
						</button>
					</div>
					
					<div class="col text-truncate">
						<div class="row g-2 align-items-center flex-nowrap">

							<div v-if="pageImg" class="col-auto"><img :src="pageImg" width="24" height="24" /></div>
							<div class="col text-truncate"><span class="fs-5 text-white">{{ $t(pageTitle) }}</span></div>
						
						</div>
					</div>
					
					<div class="col-auto">
						<div class="dropdown">
						
							<button type="button" class="btn btn-danger" data-bs-toggle="dropdown" aria-expanded="false">
								<font-awesome-icon icon="fas fa-exclamation-triangle" fixed-width />
								<span class="d-none d-lg-inline ms-1">v{{ appStore.version }}</span>
							</button>

							<div class="dropdown-menu dropdown-menu-end p-2 text-bg-danger text-center">
								v{{ appStore.version }} - {{ $t('disclaimer_text') }}
							</div>

						</div>
					</div>
					
					<div class="col-auto">
						<NuxtLink :to="localePath('/options')" class="btn btn-primary d-flex align-items-center" exactActiveClass="active" @click="appStore.sidebarOpen = false;">
							<span class="ms-0"><font-awesome-icon icon="fas fa-cog" /></span>
							<span class="d-none d-lg-inline ms-2">{{ $t('page_options') }}</span>
						</NuxtLink>
					</div>
					
				</div>
			</div>
		</div>		
		
		<div id="page" class="w-100 scroll-content">
			<slot />			
		</div>
		
		<modal-victory />
        
    </div>
	<div v-else-if="appStore.corrupted" class="w-100 h-100 d-flex align-items-center justify-content-center">
	
		<div class="container p-3" style="max-width:512px;">
			<div class="card">
				
				<div class="card-header">
					<div class="row gx-2 align-items-center justify-content-center">
						<div class="col-auto"><img src="/favicon.png" width="24" height="24" class="rounded" /></div>
						<div class="col-auto"><span class="fs-5 text-white">{{ $t('game_title') }}</span></div>
					</div>
				</div>

				<div class="card-body">
					<div class="row g-2 justify-content-center">
						<div class="col-12 text-danger text-center fs-6">{{ $t('screenCorrupted_text') }}</div>
					</div>
				</div>
				
				<div class="card-body">
					<div class="row g-2 justify-content-center">
						<div class="col-12 text-center">
							<span class="text-normal">{{ $t('screenCorrupted_info') }}</span>
						</div>
						<div class="col-5 col-lg-3">
							<button type="button" class="w-100 btn btn-danger" @click="appStore.showModal('modalWipe')">
								<font-awesome-icon icon="fas fa-fw fa-skull" />
								<span class="ms-2">{{ $t('screenCorrupted_wipeSave') }}</span>
							</button>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
		<modal-wipe />
		
    </div>
	<div v-else-if="appStore.error" class="w-100 h-100 d-flex align-items-center justify-content-center">
		
		<div class="container p-3" style="max-width:512px;">
			<div class="card">
			
				<div class="card-header">
					<div class="row gx-2 align-items-center justify-content-center">
						<div class="col-auto"><img src="/favicon.png" width="24" height="24" class="rounded" /></div>
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
                            <div class="col-auto"><img src="/favicon.png" width="24" height="24" class="rounded" /></div>
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

<style>

    #sidebar {
        position: fixed; top: 0; bottom: 0; left: 0; z-index: 20;
        width: 100%;
        transform: translateX(-100%) translateY(0) translateZ(0);
        transition: transform .28s ease-out;
    }

    @media (max-width: 767.98px) { #sidebar.open { transform: translateX(0) translateY(0) translateZ(0); } }
    @media (min-width: 768px) { #sidebar { width: 320px; transform: translateX(0) translateY(0) translateZ(0); } }

    #topbar {
        position: fixed; top: 0px; left: 0; right: 0; z-index: 10;
    }

    @media (min-width: 768px) { #topbar { left: 320px; } }

    #page {
		margin-top: 54px;
    }

    @media (min-width: 768px) { #page { padding-left: 320px; } }
	
</style>
