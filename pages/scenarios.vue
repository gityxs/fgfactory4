<script setup>
    
    definePageMeta({ layout:'home', title:'page_scenarios' })

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()

	const scenarios = computed(() => appStore.scenarios.filter(s => !s.implementing))

    const selectScenario = function(scenarioId) {
        
        appStore.newScenarioId = scenarioId
        appStore.showModal('modalScenario')
    }
    
	const isCompleted = function(scenarioId) { return appStore.completedScenarios.indexOf(scenarioId) }
	
</script>

<template>

	<div class="container p-2">
		<div class="row g-3 justify-content-center">
			
			<div v-for="scenario in scenarios" :key="scenario.id" class="col-12">
				<div class="card" :class="{ 'border-primary':scenario.id == appStore.currentScenarioId }">
				
					<div class="card-body">
						<div class="row gx-1 align-items-center">
						
							<div class="col">
								<span class="fs-5 text-white">{{ $t(scenario.title) }}</span>
								<div class="opacity-50">{{ $t(scenario.subtitle) }}</div>
							</div>
							
							<div v-if="isCompleted(scenario.id) > -1" class="col-auto">
								<img src="/victory.png" width="24" height="24" />
							</div>
							
						</div>
					</div>
					
					<div class="card-body">
						<div class="row g-1 align-items-center">
						
							<div class="col-12">
								<span>{{ $t(scenario.desc) }}</span>
							</div>

							<div class="col-12 text-end">
								<button type="button" class="btn btn-secondary text-start" :disabled="scenario.id == appStore.currentScenarioId" @click="selectScenario(scenario.id);">
									<font-awesome-icon icon="fas fa-sync-alt" />
									<span class="ms-2">{{ $t('modalScenario_close') }}</span>
								</button>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
		
		</div>
	</div>
	
</template>
