<script setup>
	
    definePageMeta({ layout:'home' })
	
	const route = useRoute()
    
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()

	const item = computed(() => gameStore.elems.find(e => e.type == 'item' && e.id == route.params.id))

	const storers = computed(() => gameStore.elems.filter(e => e.unlocked && e.type == 'storer' && e.storages[route.params.id]))
	const manuals = computed(() => gameStore.elems.filter(e => e.unlocked && e.type == 'manual' && e.results[route.params.id]))
	const producers = computed(() => gameStore.elems.filter(e => e.unlocked && e.type == 'producer' && e.outputs[route.params.id]))
    
</script>

<template>

    <div class="w-100 h-100 scroll-content">	
		<div class="container">
			<div class="row g-3">

				<div class="col-12">
					<div class="row gx-2 align-items-center justify-content-center">
					
						<div v-if="producers.length > 0" class="col-6 col-lg-4">
							<div class="card card-body">

								<div class="text-center">
									<span class="opacity-50">{{ $t('word_prod') }}</span>
								</div>

								<div class="text-center">
									<span class="fs-6 text-white"><item-prod :id="item.id" /></span>
								</div>
								
							</div>
						</div>
					
						<div class="col-6 col-lg-4">
							<div class="card card-body">

								<div class="text-center">
									<span class="opacity-50">{{ $t('word_count') }}</span>
								</div>

								<div class="text-center">
									<span class="fs-6 text-white"><item-count :id="item.id" /> / <item-max :id="item.id" /></span>
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
				
				<div v-if="manuals.length > 0" class="col-12">
					<div class="card">

						<div class="card-header">
							<span class="fs-6 text-white">{{ $t('word_manuals') }}</span>
						</div>
						
						<div class="list-group list-group-flush">

							<div v-for="manual in manuals" :key="manual.id" class="list-group-item">
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
				</div>
				
				<div v-if="storers.length > 0" class="col-12">
					<div class="card">

						<div class="card-header">
							<span class="fs-6 text-white">{{ $t('word_storers') }}</span>
						</div>
						
						<div class="list-group list-group-flush">

							<div v-for="storer in storers" :key="storer.id" class="list-group-item">
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
				
				<div v-if="producers.length > 0" class="col-12">
					<div class="card">

						<div class="card-header">
							<span class="fs-6 text-white">{{ $t('word_producers') }}</span>
						</div>
						
						<div class="list-group list-group-flush">

							<div v-for="producer in producers" :key="producer.id" class="list-group-item">
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
				</div>
			
			</div>	
		</div>	
    </div>
	
</template>
