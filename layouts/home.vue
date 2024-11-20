<script setup>

    const localePath = useLocalePath()

	const route = useRoute()
    
    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
	
	const pageTitle = computed(() => {
	
		if (route.meta.title) return route.meta.title
		else if (route.params.id && appStore.appStatus == 'started') {
			
			let item = gameStore.elems.find(e => e.type == 'item' && e.id == route.params.id)
			return item.name
		}
		
		return ''
	})

	const pageImg = computed(() => {
	
		if (route.params.id && appStore.appStatus == 'started') {
			
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
	
	const energyElem = computed(() => gameStore.getElem('energy'))
	
	const groups = computed(() => [...new Set(gameStore.elems.filter(e => (appStore.showLocked ? true : e.unlocked) && e.type == 'item').map(e => e.group))])	
	
</script>

<template>

    <div class="w-100 h-100 d-flex align-items-stretch">

		<div id="sidebar" class="h-100 bg-dark border-end border-2 border-translucent d-flex flex-column " :class="{ 'open':appStore.sidebarOpen }">
		
			<div class="p-2 border-bottom border-2 border-translucent d-flex flex-column justify-content-center" style="min-height:54px;">
				<div class="row gx-2 align-items-center justify-content-lg-center">
				
					<div class="col-auto">
						<img src="/favicon.png" width="24" height="24" class="rounded" />
					</div>
					
					<div class="col col-lg-auto">
						<span class="fs-5 text-white">{{ $t('game_title') }}</span>
					</div>

					<div class="col-auto d-lg-none">
						<button type="button" class="btn btn-secondary" @click="appStore.sidebarOpen = false;">
							<font-awesome-icon icon="fas fa-times" fixed-width />
						</button>
					</div>
					
				</div>
			</div>
		
			<div class="py-2 flex-grow-1 scroll-content">
				
				<div class="p-2">
					<div class="row g-2 justify-content-center">
						
						<div class="col-6">
							<NuxtLink :to="localePath('/milestones')" class="btn btn-primary position-relative d-flex align-items-center justify-content-center" exactActiveClass="active" @click="appStore.sidebarOpen = false;">
								<font-awesome-icon icon="fas fa-check-circle" fixed-width />
								<span class="ms-2">{{ $t('page_milestones') }}</span>
								<div v-if="readyMilestones > 0" class="position-absolute lh-1 small text-success" style="top:-.25rem; right:-.25rem;"><font-awesome-icon icon="fas fa-check-circle" fixed-width /></div>
							</NuxtLink>
						</div>
						
						<div v-if="buildings > 0" class="col-6">
							<NuxtLink :to="localePath('/buildings')" class="btn btn-primary position-relative d-flex align-items-center justify-content-center" exactActiveClass="active" @click="appStore.sidebarOpen = false;">
								<font-awesome-icon icon="fas fa-industry" fixed-width />
								<span class="ms-2">{{ $t('page_buildings') }}</span>
								<div v-if="newBuildings > 0" class="position-absolute lh-1 small text-success" style="top:-.25rem; left:-.25rem;"><font-awesome-icon icon="fas fa-certificate" fixed-width /></div>
							</NuxtLink>
						</div>
						
						<div v-if="appStore.showLocked ? true : energyElem.unlocked" class="col-12">
							<div class="card card-body">
								<div class="row gx-2 align-items-center">
									
									<div class="col">
										<span>{{ $t(energyElem.name) }}</span>
									</div>
									
									<div class="col-auto">
										<span class="text-white"><img :src="energyElem.img" width="16" height="16" /> <item-count id="energy" /></span>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</div>

				<div v-for="group in groups" :key="group" class="p-2">
					<sidebar-group :group="group" />
				</div>
				
			</div>

			<div class="p-2 border-top border-2 border-translucent">
				<div class="row g-2 justify-content-center">
				
					<div class="col-12 text-center">
						<span class="opacity-75">{{ $t('options_support') }}</span>
					</div>
					
					<div class="col">
						<a href="https://www.patreon.com/bePatron?u=61283131" class="w-100 btn btn-secondary" target="_blank" :title="$t('options_patreon')">
							<img src="/patreon.png" width="16" height="16" />
						</a>
					</div>

					<div class="col">
						<a href="https://ko-fi.com/freddecgames" class="w-100 btn btn-secondary" target="_blank" :title="$t('options_kofi')">
							<img src="/kofi.png" width="16" height="16" />
						</a>
					</div>

					<form class="col" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" :title="$t('options_paypal')">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
						<button type="submit" class="w-100 btn btn-secondary">
							<img src="/paypal.png" width="16" height="16" />
						</button>
					</form>

					<div class="col">
						<a href="https://discord.gg/WhvQvZqyq5" class="w-100 btn btn-secondary" target="_blank" :title="$t('options_discord')">
							<img src="/discord.png" width="16" height="16" />
						</a>
					</div>
					
				</div>
			</div>
			
		</div>

		<div id="content" class="h-100 d-flex flex-column">
	
			<div class="bg-dark border-bottom border-2 border-translucent d-flex flex-column justify-content-center" style="min-height:54px;">
				<div class="p-2">
					<div class="row g-2 align-items-center flex-nowrap">

						<div class="col-auto d-lg-none">
							<button type="button" class="btn btn-primary" @click="appStore.sidebarOpen = true;">
								<font-awesome-icon icon="fas fa-bars" fixed-width />
							</button>
						</div>
						
						<div class="col text-truncate">
							<div class="row gx-1 align-items-center flex-nowrap">

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
							<NuxtLink :to="localePath('/scenarios')" class="btn btn-primary d-flex align-items-center" exactActiveClass="active" @click="appStore.sidebarOpen = false;">
								<span class="ms-0"><font-awesome-icon icon="fas fa-list" fixed-width /></span>
								<span class="d-none d-lg-inline ms-2">{{ $t('page_scenarios') }}</span>
							</NuxtLink>
						</div>
						
						<div class="col-auto">
							<NuxtLink :to="localePath('/options')" class="btn btn-primary d-flex align-items-center" exactActiveClass="active" @click="appStore.sidebarOpen = false;">
								<span class="ms-0"><font-awesome-icon icon="fas fa-cog" fixed-width /></span>
								<span class="d-none d-lg-inline ms-2">{{ $t('page_options') }}</span>
							</NuxtLink>
						</div>
						
					</div>
				</div>
			</div>		
			
			<div class="py-2 flex-grow-1 scroll-content">
				<slot />			
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

    @media (max-width: 768px) { #sidebar.open { transform: translateX(0) translateY(0) translateZ(0); } }
    @media (min-width: 768px) { #sidebar { width: 272px; transform: translateX(0) translateY(0) translateZ(0); } }

    #content {
        position: fixed; top: 0px; left: 0; right: 0; z-index: 10;
    }

    @media (min-width: 768px) { #content { left: 272px; } }
	
</style>
