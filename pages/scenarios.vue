<script setup>
    
    definePageMeta({ layout:'home', title:'page_scenarios' })

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()

    const selectScenario = function(scenarioId) {
        
        appStore.newScenarioId = scenarioId
        appStore.showModal('modalScenario')
    }
    
</script>

<template>

	<div class="container">
		<div class="row g-3 justify-content-center">
			
			<div v-for="scenario in appStore.scenarios" :key="scenario.id" class="col-12">
				<div class="card" :class="{ 'border-primary':scenario.id == appStore.currentScenarioId }">
				
					<div class="card-header">
						<span class="fs-6 text-white">{{ $t(scenario.title) }}</span>
						<div class="opacity-50">{{ $t(scenario.subtitle) }}</div>
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
    
    <modal-scenario />
	
</template>
