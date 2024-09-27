<script setup>

    const props = defineProps([ 'id' ])

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
	const elem = computed(() => gameStore.getElem(props.id))
	const outputElem = computed(() => gameStore.getElem(elem.value.assign.output.id))
    
	const costs = computed(() => gameStore.getAssignCosts(elem.value))
	const inputs = computed(() => gameStore.getAssignInputs(elem.value))
	const outputs = computed(() => gameStore.getAssignOutputs(elem.value))
	const storages = computed(() => gameStore.getAssignStorages(elem.value))
	
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
					
					<div v-if="outputs" class="col-12">
						<div class="row g-1">
							
							<div class="col-auto"><span class="opacity-50 small text-uppercase fw-bold">{{ $t('word_output') }}</span></div>
							
							<div class="col">
								<div v-for="(count, id) in outputs" :key="id" class="col-12">
									<block-output :id="id" :count="count" />
								</div>
							</div>
							
						</div>
					</div>
					
					<div v-if="storages" class="col-12">
						<div class="row g-1">
						
							<div class="col-auto"><span class="opacity-50 small text-uppercase fw-bold">{{ $t('word_storage') }}</span></div>
							
							<div class="col">
								<div v-for="(count, id) in storages" :key="id" class="col-12">
									<block-storage :id="id" :count="count" />
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
		
		<div class="col text-truncate text-white">{{ $t(elem.name) }}</div>
		
		<div class="col-auto"><value-prod :elem="outputElem" /></div>
		
		<div class="col-auto text-end" style="width:50px;"><value-assign-count :elem="elem" /></div>
		
		<div v-if="elem.select.values && elem.select.values.length > 1" class="col-auto"><value-select-count :elem="elem" /></div>
		
		<div class="col-auto"><button-unassign :elem="elem" /></div>
		<div class="col-auto"><button-assign :elem="elem" /></div>
		
	</div>
    
</template>
