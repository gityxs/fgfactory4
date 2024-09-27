<script setup>
    
    useHead({ title:'page_game' })

    definePageMeta({ layout:'home' })

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
	const tabs = computed(() => gameStore.elems.filter(e => e.type == 'cat' && e.unlocked))
	
	const notifs = computed(() =>  { 
	
		let ret = {}
		
		tabs.value.forEach(tab => {
			ret[tab.id] = gameStore.elems.filter(e => e.cat == tab.id && e.unlocked && e.notified).length
		})
		
		return ret	
	})
	
</script>

<template>

    <div class="w-100 h-100 d-flex flex-column">
	
        <div class="container px-lg-3 pb-0">
            <div class="nav nav-tabs flex-nowrap" style="overflow-x:auto; overflow-y:hidden; z-index:1000;">
				
                <div v-for="tab in tabs" :key="tab.id" class="col-3 nav-item">
                    <button type="button" class="w-100 nav-link text-nowrap position-relative" :class="{ 'active':appStore.gameTabId == tab.id }" @click="appStore.gameTabId = tab.id">

						<div v-if="notifs[tab.id] > 0" class="position-absolute translate-middle lh-1">
							<font-awesome-icon icon="fas fa-certificate" class="text-success" />
						</div>
					
                        <div class="row gx-2 align-items-center justify-content-center flex-nowrap">
                            <div class="col-auto"><font-awesome-icon :icon="tab.icon" /></div>
                            <div class="col text-truncate">{{ $t(tab.name) }}</div>
                        </div>
						
                    </button>
                </div>
				
            </div>
        </div>
		
		<div class="flex-grow-1 scroll-content py-2">
			<div class="container">
				<pane-content :cat="appStore.gameTabId" />
			</div>
        </div>
	
    </div>
	
</template>
