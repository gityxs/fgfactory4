<script setup>

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()

	const storers = computed(() => [...new Set(gameStore.elems.filter(e => e.type == 'storage' && e.unlocked).map(e => e.assign.id))])
	const storages = function(storer) { return gameStore.elems.filter(e => e.type == 'storage' && e.unlocked && e.assign.id == storer) }
	
</script>

<template>

	<div v-if="storers.length < 1" class="row g-4">
	
		<div class="col-12 text-center">
			<span>{{ $t('text_nothing') }}</span>
		</div>
	
    </div>
	<div v-else class="row g-4">

		<div v-for="storer in storers" :key="storer" class="col-12">
			<div class="row g-1">		
		
				<div class="col-12">
					<button type="button" class="btn p-0 border-0" data-bs-toggle="collapse" :data-bs-target="'#collapse' + storer" @click="appStore.toggleCollapsed(storer)">
						<div class="row gx-2 align-items-center">
							
							<div class="col-auto">
								<font-awesome-icon icon="fas fa-caret-down" class="opacity-50" />
							</div>
							
							<div class="col">
								<line-machine :id="storer" />
							</div>
							
						</div>
					</button>
				</div>
		
				<div :id="'collapse' + storer" class="collapse col-12" :class="{ 'show':!appStore.isCollapsed(storer) }">
					<div class="card">					
						<div class="list-group list-group-flush">				
							<div v-for="storage in storages(storer)" :key="storage.id" class="list-group-item"><line-storage :id="storage.id" /></div>					
						</div>					
					</div>
				</div>
				
			</div>
		</div>
		
    </div>
    
</template>
