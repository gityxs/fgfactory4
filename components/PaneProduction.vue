<script setup>

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()

	const machines = computed(() => [...new Set(gameStore.elems.filter(e => e.type == 'recipe' && e.unlocked).map(e => e.assign.id))])
	const recipes = function(machine) { return gameStore.elems.filter(e => e.type == 'recipe' && e.unlocked && e.assign.id == machine) }
	
</script>

<template>

	<div v-if="machines.length < 1" class="row g-4">
	
		<div class="col-12 text-center">
			<span>{{ $t('text_nothing') }}</span>
		</div>
	
    </div>
	<div v-else class="row g-4">

		<div v-for="machine in machines" :key="machine" class="col-12">
			<div class="row g-1">		

				<div class="col-12">
					<button type="button" class="btn p-0 border-0" data-bs-toggle="collapse" :data-bs-target="'#collapse' + machine" @click="appStore.toggleCollapsed(machine)">
						<div class="row gx-2 align-items-center">
							
							<div class="col-auto">
								<font-awesome-icon icon="fas fa-caret-down" class="opacity-50" />
							</div>
							
							<div class="col">
								<line-machine :id="machine" />
							</div>
							
						</div>
					</button>
				</div>
		
				<div :id="'collapse' + machine" class="collapse col-12" :class="{ 'show':!appStore.isCollapsed(machine) }">
					<div class="card">
						<div class="list-group list-group-flush">				
							<div v-for="recipe in recipes(machine)" :key="recipe.id" class="list-group-item"><line-production :id="recipe.id" /></div>					
						</div>					
					</div>
				</div>
				
			</div>
		</div>
		
    </div>
    
</template>
