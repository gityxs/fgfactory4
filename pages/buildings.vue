<script setup>
    
    definePageMeta({ layout:'home', title:'page_buildings' })

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
	const generators = computed(() => gameStore.elems.filter(e => e.unlocked && e.type == 'generator'))
	
	const groups = computed(() => [...new Set(gameStore.elems.filter(e => e.unlocked && e.type == 'building').map(e => e.group))])
	const ids = function(group) { return gameStore.elems.filter(e => e.unlocked && e.type == 'building' && e.group == group).map(e => e.id) }
	
	const energyElem = computed(() => gameStore.getElem('energy'))
	
</script>

<template>

	<div class="container">
		<div class="row g-3">
			
			<div v-if="energyElem.unlocked" class="col-12">				
				<div class="card card-body">
					<div class="row gx-2 align-items-center">
						
						<div class="col">
							<span class="fs-6 text-white">{{ $t(energyElem.name) }}</span>
						</div>
						
						<div class="col-auto">
							<span class="fs-6 text-white"><img :src="energyElem.img" width="16" height="16" /> <item-count id="energy" /></span>
						</div>
						
					</div>
				</div>				
			</div>
			
			<div v-if="generators.length > 0" class="col-12">
				<div class="card">
					
					<div class="card-header">
						<span class="fs-6 text-white">{{ $t('word_generators') }}</span>
					</div>
					
					<div class="list-group list-group-flush">
						<div v-for="generator in generators" :key="generator.id" class="list-group-item">
							<generator :id="generator.id" />
						</div>
					</div>

				</div>
			</div>
			
			<div v-for="group in groups" :key="group" class="col-12">
				<div class="card">
					
					<div class="card-header">
						<span class="fs-6 text-white">{{ $t(group) }}</span>
					</div>
					
					<div class="list-group list-group-flush">
						<div v-for="id in ids(group)" :key="id" class="list-group-item">
							<building :id="id" />
						</div>
					</div>

				</div>
			</div>
	
		</div>
	</div>
	
</template>
