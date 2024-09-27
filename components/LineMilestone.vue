<script setup>

    const props = defineProps([ 'id' ])

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
	const elem = computed(() => gameStore.getElem(props.id))
	
	const costs = computed(() => gameStore.getBuildCosts(elem.value))
	
</script>

<template>

	<div v-if="elem.count < elem.max" class="row gx-2 align-items-center">

		<div class="position-relative col-auto">
		
			<div v-if="elem.notified" class="position-absolute translate-middle lh-1">
				<font-awesome-icon icon="fas fa-certificate" class="text-success" />
			</div>
		
			<button type="button" class="btn btn-secondary btn-icon" data-bs-toggle="dropdown" @click="elem.notified = false">
				<font-awesome-icon icon="fas fa-info-circle" />
			</button>
			
			<div class="dropdown-menu p-2">
				<div class="row g-3">
				
					<div class="col-12">
						<div class="fs-6 text-white">{{ $t(elem.name) }}</div>
						<div v-if="elem.desc">{{ $t(elem.desc) }}</div>
					</div>
					
					<div v-if="costs" class="col-12">
						<div class="row g-2">
						
							<div class="col-auto"><span class="opacity-50 small text-uppercase fw-bold">{{ $t('word_objective') }}</span></div>
							
							<div class="col">
								<div class="row g-1">
									<div v-for="(count, id) in costs" :key="id" class="col-12">
										<block-cost :id="id" :count="count" />
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
				
		<div v-if="elem.build && elem.build.seconds != undefined" class="col-auto">
			<button-destroy :elem="elem" />
		</div>
		
		<div v-if="elem.build && elem.build.seconds != undefined" class="col-auto" style="width:75px;">
			<value-seconds :elem="elem" />
			<value-progress :elem="elem" />
		</div>
				
		<div class="col-auto">
			<button-build :elem="elem" />
		</div>
		
	</div>
	<div v-else class="row gx-2 align-items-center">

		<div class="col text-truncate">
			<span class="text-success">{{ $t(elem.name) }}</span>
		</div>

		<div class="col-auto">
			<button type="button" class="btn btn-success btn-icon" disabled>
				<font-awesome-icon icon="fas fa-check-circle" />
			</button>
		</div>
		
	</div>
    
</template>
