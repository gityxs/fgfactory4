<script setup>

    const props = defineProps([ 'id' ])
	
    import { formatNumber } from '~/store/utils.js'    

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
	const elem = computed(() => gameStore.getElem(props.id))
	
	const costs = computed(() => gameStore.getBuildCosts(elem.value))
	const inputs = computed(() => gameStore.getBuildInputs(elem.value))
	const results = computed(() => gameStore.getBuildResults(elem.value))
    
</script>

<template>

	<div class="row gx-2 align-items-center">
		
		<div class="position-relative col-auto">
		
			<div v-if="elem.notified" class="position-absolute translate-middle lh-1">
				<font-awesome-icon icon="fas fa-certificate" class="text-success" />
			</div>
		
			<button type="button" class="btn btn-secondary btn-icon" data-bs-toggle="dropdown" @click="elem.notified = false">
				<img v-if="elem.img" :src="elem.img" width="24" height="24" />
				<font-awesome-icon v-else icon="fas fa-info-circle" />
			</button>
			
			<div class="dropdown-menu p-2">
				<div class="row g-3">
				
					<div class="col-12">
						<div class="fs-6 text-white">{{ $t(elem.name) }}</div>
						<div v-if="elem.desc">{{ $t(elem.desc) }}</div>
					</div>
					
					<div class="col-12">
						<div class="row g-1">
						
							<div class="col-12">
								<div class="row g-2 align-items-center">
								
									<div class="col-auto"><span class="opacity-50 small text-uppercase fw-bold">{{ $t('word_count') }}</span></div>
									
									<div class="col">
										<div class="row gx-1 align-items-center justify-content-end">
											<div class="col-auto"><value-count :elem="elem" /></div>
											<div v-if="elem.max != undefined && elem.max != Infinity" class="col-auto">/ <value-max :elem="elem" /></div>
										</div>
									</div>
									
								</div>
							</div>
							
							<div v-if="elem.prod != undefined" class="col-12">
								<div class="row g-2 align-items-center">
									<div class="col-auto"><span class="opacity-50 small text-uppercase fw-bold">{{ $t('word_prod') }}</span></div>
									<div class="col text-end"><value-prod :elem="elem" /></div>
								</div>
							</div>
							
							<div v-if="inputs" class="col-12">
								<div class="row g-1">
								
									<div class="col-auto"><span class="opacity-50 small text-uppercase fw-bold">{{ $t('word_input') }}</span></div>
									
									<div class="col">
										<div v-for="(count, id) in inputs" :key="id" class="col-12">
											<block-input :id="id" :count="count" />
										</div>
									</div>
									
								</div>
							</div>
							
							<div v-if="costs" class="col-12">
								<div class="row g-2">
								
									<div class="col-auto"><span class="opacity-50 small text-uppercase fw-bold">{{ $t('word_cost') }}</span></div>
									
									<div class="col">
										<div class="row g-1">
											<div v-for="(count, id) in costs" :key="id" class="col-12">
												<block-cost :id="id" :count="count" />
											</div>
										</div>
									</div>
									
								</div>
							</div>

							<div v-if="results" class="col-12">
								<div class="row g-2">
								
									<div class="col-auto"><span class="opacity-50 small text-uppercase fw-bold">{{ $t('word_result') }}</span></div>
									
									<div class="col">
										<div class="row g-1">
											<div v-for="(count, id) in results" :key="id" class="col-12">
												<block-result :id="id" :count="count" />
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
		
		<div class="col text-truncate">
			<span class="text-white">{{ $t(elem.name) }}</span>
		</div>

		<div class="col-auto"><value-count :elem="elem" /></div>
		
		<div v-if="elem.build && elem.build.seconds != undefined" class="col-auto" style="width:75px;">
			<value-seconds :elem="elem" />
			<value-progress :elem="elem" />
		</div>
		
		<div v-if="elem.select && elem.select.values && elem.select.values.length > 1" class="col-auto"><value-select-count :elem="elem" /></div>
		
		<div v-if="elem.build" class="col-auto"><button-build :elem="elem" iconPlay="fas fa-play" iconStop="fas fa-stop" /></div>		
		
	</div>
    
</template>
