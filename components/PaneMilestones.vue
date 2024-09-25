<script setup>

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
	
	const groups = computed(() => [...new Set(gameStore.elems.filter(e => e.type == 'milestone' && e.unlocked).map(e => e.group))])
	
	const milestones = function(group) { return gameStore.elems.filter(e => e.type == 'milestone' && e.unlocked && e.group == group) }
	
</script>

<template>

	<div class="row g-4">		
		<div v-for="group in groups" :key="group" class="col-12">
			<div class="row g-1">		
		
				<div class="col-12">
					<button type="button" class="btn p-0 border-0" data-bs-toggle="collapse" :data-bs-target="'#collapse' + group" @click="appStore.toggleCollapsed(group)">
						<div class="row gx-2 align-items-center">
							
							<div class="col-auto">
								<font-awesome-icon icon="fas fa-caret-down" class="opacity-50" />
							</div>
							
							<div class="col-auto">
								<span class="text-uppercase small">{{ $t(group) }}</span>
							</div>
							
						</div>
					</button>
				</div>
				
				<div :id="'collapse' + group" class="collapse col-12" :class="{ 'show':!appStore.isCollapsed(group) }">
					<div class="card">				
						<div class="list-group list-group-flush">				
							<div v-for="milestone in milestones(group)" :key="milestone.id" class="list-group-item"><line-milestone :id="milestone.id" /></div>					
						</div>					
					</div>
				</div>
			
			</div>			
		</div>			
    </div>
    
</template>
