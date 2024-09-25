<script setup>
	
	import { formatNumber } from '~/store/utils.js'
	
    const props = defineProps([ 'id' ])

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
	const elem = computed(() => gameStore.getElem(props.id))
	
	const available = computed(() => gameStore.getAvailableCount(elem.value.id))
	
	const costs = computed(() => gameStore.getBuildCosts(elem.value))
	const results = computed(() => gameStore.getBuildResults(elem.value))
	
</script>

<template>

	<div class="row gx-2 align-items-center">
		
		<div v-if="elem.img != undefined" class="col-auto"><img :src="elem.img" width="16" height="16" /></div>
		
		<div class="col text-truncate">
			<span class="text-uppercase small">{{ $t(elem.name) }}</span>
		</div>

		<div class="col-auto"><span class="badge" :class="{ 'text-bg-success':available > 0, 'text-bg-dark':available <= 0 }">{{ formatNumber(available) }}</span></div>
		
	</div>
    
</template>
