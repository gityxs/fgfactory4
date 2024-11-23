<script setup>
    
    import { formatNumber } from '~/store/utils.js'
	
    definePageMeta({ layout:'home', title:'page_recycling' })

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()

	const placeElem = computed(() => gameStore.getElem('place'))
	const pointElem = computed(() => gameStore.getElem('point'))

	const manuals = computed(() => gameStore.elems.filter(e => (appStore.showLocked ? true : e.unlocked) && e.type == 'manual' && e.results['place']))

	const producers = computed(() => gameStore.elems.filter(e => (appStore.showLocked ? true : e.unlocked) && e.type == 'producer' && e.outputs['point']))
    
	const rawprod = computed(() => {
	
		let ret = 0
		
		producers.value.forEach(p => {
			ret += p.assign.count * p.outputs['point']
		})
		
		return ret
	})
	
</script>

<template>

	<div class="container p-2">
		<div class="row g-3">
			
			<div class="col-12">
				<div class="card">
					
					<div class="card-header">
						<div class="row gx-2 align-items-center">
							
							<div class="col">
								<span class="fs-6 text-white">{{ $t(placeElem.name) }}</span>
							</div>
							
							<div class="col-auto">
								<div class="bg-dark rounded py-1 px-2">
									<span class="text-white"><img :src="placeElem.img" width="16" height="16" /><item-count id="place" class="ms-2" /></span>
								</div>
							</div>
							
						</div>
					</div>
					
					<div class="card-body">
						<div class="row g-3">
						
							<div v-if="manuals.length > 0" class="col-12">
								<div class="row gy-1 gx-4">

									<div class="col-12">
										<span class="text-subtitle">{{ $t('word_manuals') }}</span>
									</div>
									
									<div v-for="manual in manuals" :key="manual.id" class="col-12 col-lg-6">
										<div class="row gx-2 align-items-center">

											<div class="col-auto">		
												<building-info :id="manual.id" :img="placeElem.img" />
											</div>

											<div class="col text-truncate">
												<span class="text-white">{{ $t(placeElem.name) }}</span>
											</div>
											
											<div class="col-auto">
												<div class="input-group">
													<item-select :id="manual.id" />
													<manual-button :id="manual.id" icon="fas fa-plus-circle" />
												</div>
											</div>
										
										</div>
									</div>

								</div>
							</div>
						
						</div>
					</div>

				</div>
			</div>
			
			<div class="col-12">
				<div class="card">
				
					<div class="card-header">
						<div class="row gx-2 align-items-center">
							
							<div class="col">
								<span class="fs-6 text-white">{{ $t(pointElem.name) }}</span>
							</div>
							
							<div class="col-auto">
								<div class="bg-dark rounded py-1 px-2">
									<span class="text-white"><img :src="pointElem.img" width="16" height="16" /><item-count id="point" class="ms-2" /></span>
								</div>
							</div>
							
						</div>
					</div>
					
					<div class="card-body">
						<div class="row gy-1 gx-4">

							<div class="col-12">
								<span class="text-subtitle">{{ $t('word_producers') }}</span> <span v-if="rawprod != 0" class="ms-2 text-success">+ {{ formatNumber(rawprod) }} /s</span>
							</div>
			
							<div v-for="producer in producers" :key="producer.id" class="col-12 col-lg-6">
								<div v-if="producer.unlocked" class="row gx-2 align-items-center">

									<div class="col-auto position-relative">
									
										<producer-info :id="producer.id" />
										
										<item-available :id="producer.assign.id" class="position-absolute" style="top:0; left:0px;" />
										
									</div>

									<div class="col text-truncate">
										<span class="text-white"><assign-name :id="producer.id" /></span>
									</div>
									
									<div class="col-auto">
										<small>x</small> <assign-count :id="producer.id" />
									</div>

									<div class="col-auto">
										<div class="input-group">
											<unassign-button :id="producer.id" />
											<item-select :id="producer.id" />
											<assign-button :id="producer.id" />
										</div>
									</div>

								</div>
								<div v-else class="row gx-2 align-items-center">
								
									<div class="col-auto">
										<button type="button" class="btn btn-secondary" disabled style="width:40px;">
											<font-awesome-icon icon="fas fa-lock" fixed-width />
										</button>
									</div>
									
									<div class="col text-truncate">
										<span class="opacity-50">{{ $t('word_locked') }}</span>
									</div>
									
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
			
		</div>
	</div>
	
</template>
