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
			
			<div v-for="scenario in appStore.scenarios" :key="scenario.id" class="col-12 col-lg-6">
				<button type="button" class="w-100 btn btn-secondary text-start" :class="{ 'text-bg-primary':scenario.id == appStore.currentScenarioId }" @click="selectScenario(scenario.id);">
					<div class="row g-1 align-items-center">
						<div class="col-12 text-center"><span class="fs-6">{{ $t(scenario.title) }}</span></div>
					</div>
				</button>
			</div>
		
		</div>
	</div>
    
    <modal-scenario />
	
</template>
