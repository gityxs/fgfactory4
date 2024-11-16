<script setup>
    
    definePageMeta({ layout:'home', title:'page_milestones' })

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
	const groups = computed(() => [...new Set(gameStore.elems.filter(e => (appStore.showLocked ? true : e.unlocked) && e.type == 'milestone' && (e.count < 1 || appStore.showCompleted)).map(e => e.group))])

	const completedIds = function(group) { return gameStore.elems.filter(e => (appStore.showLocked ? true : e.unlocked) && e.type == 'milestone' && e.group == group&& e.count > 0).map(e => e.id) }
	const uncompletedIds = function(group) { return gameStore.elems.filter(e => (appStore.showLocked ? true : e.unlocked) && e.type == 'milestone' && e.group == group && e.count < 1).map(e => e.id) }
	
</script>

<template>

	<div class="container p-2">
		<div class="row g-3">
			
			<div v-for="group in groups" :key="group" class="col-12">
				<div class="card">
					
					<div class="card-header">
						<milestone-group :group="group" />
					</div>
					
					<div class="card-body">
						<div class="row g-3">

							<div v-if="appStore.showCompleted && completedIds(group).length > 0" class="col-12">
								<div class="row g-1">
									
									<div class="col-12">
										<span class="text-subtitle">{{ $t('word_completed')}}</span>
									</div>
									
									<div v-for="id in completedIds(group)" :key="id" class="col-6 col-lg-3">
										<milestone :id="id" />
									</div>
									
								</div>							
							</div>
								
							<div v-if="uncompletedIds(group).length > 0" class="col-12">
								<div class="row g-1">

									<div class="col-12">
										<span class="text-subtitle">{{ $t('word_uncompleted')}}</span>
									</div>

									<div v-for="id in uncompletedIds(group)" :key="id" class="col-12">
										<milestone :id="id" />
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
