<script setup>
    
    definePageMeta({ layout:'home', title:'page_milestones' })

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
	const groups = computed(() => [...new Set(gameStore.elems.filter(e => (appStore.showLocked ? true : e.unlocked) && e.type == 'milestone' && (e.count < 1 || appStore.showCompleted)).map(e => e.group))])
	const ids = function(group) { return gameStore.elems.filter(e => (appStore.showLocked ? true : e.unlocked) && e.type == 'milestone' && e.group == group && (e.count < 1 || appStore.showCompleted)).map(e => e.id) }
	
</script>

<template>

	<div class="container">
		<div class="row g-3">
			
			<div v-for="group in groups" :key="group" class="col-12">
				<div class="card">
					
					<div class="card-header">
						<milestone-group :group="group" />
					</div>
					
					<div class="list-group list-group-flush">
						<div v-for="id in ids(group)" :key="id" class="list-group-item">
							<milestone :id="id" />
						</div>
					</div>

				</div>
			</div>
	
		</div>
	</div>
	
</template>
