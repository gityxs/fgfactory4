<script setup>

    import { formatNumber } from '~/store/utils.js'
	
    definePageMeta({ layout:'home' })
	
	const route = useRoute()
    
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()

	const item = computed(() => gameStore.elems.find(e => e.type == 'item' && e.id == route.params.id))

	const storers = computed(() => gameStore.elems.filter(e => e.unlocked && e.type == 'storer' && e.storages[route.params.id]))
	const manuals = computed(() => gameStore.elems.filter(e => e.unlocked && e.type == 'manual' && e.results[route.params.id]))
	const producers = computed(() => gameStore.elems.filter(e => e.unlocked && e.type == 'producer' && e.outputs[route.params.id]))
	
	const consumers = computed(() => {
	
		let ret = []
		
		ret = ret.concat(gameStore.elems.filter(e => e.unlocked && e.type == 'producer' && e.inputs && e.inputs[route.params.id] && e.assign.count > 0))
		
		let generators = gameStore.elems.filter(e => e.unlocked && e.type == 'generator' && e.count > 0)
		generators.forEach(g => {
			
			let manuals = gameStore.elems.filter(e => e.unlocked && e.type == 'manual' && e.inputs && e.inputs[route.params.id])
			manuals.forEach(m => { 
			
				let newConsumer = { id:g.id, img:g.img, name:g.name, inputs:m.inputs, assign:{ count:g.count }}
				ret.push(newConsumer)
			})
		})
		
		return ret
	})
    
	const rawprod = computed(() => {
	
		let ret = 0
		
		producers.value.forEach(p => {
			ret += p.assign.count * p.outputs[route.params.id]
		})
		
		return ret
	})
    
	const rawconsu = computed(() => {
	
		let ret = 0
		
		consumers.value.forEach(c => {
			ret += c.assign.count * c.inputs[route.params.id]
		})
		
		return ret
	})
	
</script>

<template>

    <div class="w-100 h-100 scroll-content">	
		<div class="container">
			<div class="row g-3">

				<div class="col-12">
					<div class="card">
				
						<div class="card-header">
							<div class="row gx-2 align-items-center">

								<div class="col">
									<span class="fs-6 text-white">{{ $t('word_count') }}</span>
								</div>

								<div class="col-auto">
									<span class="fs-6 text-white"><item-count :id="item.id" /> / <item-max :id="item.id" /></span>
								</div>
								
							</div>
						</div>

						<div class="card-body">
							<div class="row g-3">
						
								<div v-if="manuals.length > 0" class="col-12">
									<div class="row g-1">

										<div class="col-12">
											<span class="text-subtitle">{{ $t('word_manuals') }}</span>
										</div>
										
										<div v-for="manual in manuals" :key="manual.id" class="col-12">
											<div class="row gx-2 align-items-center">

												<div class="col-auto">		
													<manual-info :id="manual.id" :img="item.img" />			
												</div>

												<div class="col text-truncate">
													<span class="text-white">{{ $t(item.name) }}</span>
												</div>
												
												<div class="col-auto">
													<manual-button-stop :id="manual.id" />
												</div>
												
												<div class="col-auto" style="width:65px;">
													<manual-seconds :id="manual.id" />
													<manual-progress :id="manual.id" />
												</div>
												
												<div class="col-auto">
													<manual-button :id="manual.id" icon="fas fa-play" />
												</div>
											
											</div>
										</div>

									</div>
								</div>
								
								<div v-if="storers.length > 0" class="col-12">
									<div class="row g-1">

										<div class="col-12">
											<span class="text-subtitle">{{ $t('word_storers') }}</span>
										</div>
										
										<div v-for="storer in storers" :key="storer.id" class="col-12">
											<div class="row gx-2 align-items-center">

												<div class="col-auto">		
													<storer-info :id="storer.id" />			
												</div>

												<div class="col text-truncate">
													<span class="text-white"><assign-name :id="storer.id" /></span>
												</div>

												<div class="col-auto">
													<item-available :id="storer.assign.id" />
												</div>
												
												<div class="col-auto">
													<small>x</small> <assign-count :id="storer.id" />
												</div>

												<div class="col-auto">
													<unassign-button :id="storer.id" />
												</div>
												
												<div class="col-auto">
													<assign-button :id="storer.id" />
												</div>
												
											</div>
										</div>

									</div>
								</div>
						
							</div>
						</div>
						
					</div>
				</div>

				<div v-if="producers.length > 0" class="col-12">
					<div class="card">
					
						<div class="card-header">
							<div class="row gx-2 align-items-center justify-content-center">
						
								<div class="col">
									<span class="fs-6 text-white">{{ $t('word_prod') }}</span>
								</div>

								<div class="col-auto">
									<span class="fs-6 text-white"><item-prod :id="item.id" /></span>
								</div>
									
							</div>
						</div>
							
						<div class="card-body">
							<div class="row g-3">

								<div v-if="producers.length > 0" class="col-12">
									<div class="row g-1">

										<div class="col-12">
											<span class="text-subtitle">{{ $t('word_producers') }}</span> <span v-if="rawprod != 0" class="ms-2 text-success">+ {{ formatNumber(rawprod) }} /s</span>
										</div>
						
										<div v-for="producer in producers" :key="producer.id" class="col-12">
											<div class="row gx-2 align-items-center">

												<div class="col-auto">		
													<producer-info :id="producer.id" />			
												</div>

												<div class="col text-truncate">
													<span class="text-white"><assign-name :id="producer.id" /></span>
												</div>

												<div class="col-auto">
													<item-available :id="producer.assign.id" />
												</div>
												
												<div class="col-auto">
													<small>x</small> <assign-count :id="producer.id" />
												</div>

												<div class="col-auto">
													<unassign-button :id="producer.id" />
												</div>
												
												<div class="col-auto">
													<assign-button :id="producer.id" />
												</div>

											</div>
										</div>

									</div>
								</div>

								<div v-if="consumers.length > 0" class="col-12">
									<div class="row g-1">

										<div class="col-12">
											<span class="text-subtitle">{{ $t('word_consumers') }}</span> <span v-if="rawconsu != 0" class="ms-2 text-danger">- {{ formatNumber(rawconsu) }} /s</span>
										</div>
						
										<div v-for="consumer in consumers" :key="consumer.id" class="col-12">
											<div class="row gx-2 align-items-center">
											
												<div class="col-auto">
													<img v-if="consumer.img" :src="consumer.img" width="18" height="18" />
													<font-awesome-icon v-else icon="fas fa-info-circle" fixed-width />
												</div>
												
												<div class="col text-truncate">
													<span class="text-white">{{ $t(consumer.name) }}</span>
												</div>

												<div class="col-auto">
													<span class="text-danger">- {{ formatNumber(consumer.assign.count * consumer.inputs[item.id]) }} /s</span>
												</div>

												<div class="col-auto">
													<NuxtLink v-if="consumer.mainId" :to="localePath('/item/' + consumer.mainId)" class="w-100 btn btn-primary" :title="$t(consumer.name)">
														<font-awesome-icon icon="fas fa-arrow-right" fixed-width />
													</NuxtLink>
													<NuxtLink v-else :to="localePath('/buildings/')" class="w-100 btn btn-primary" :title="$t(consumer.name)">
														<font-awesome-icon icon="fas fa-arrow-right" fixed-width />
													</NuxtLink>
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
		</div>	
    </div>
	
</template>
