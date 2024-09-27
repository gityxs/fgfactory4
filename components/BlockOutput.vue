<script setup>
    
    const props = defineProps([ 'id', 'count' ])
	
    import { formatNumber } from '~/store/utils.js'    

    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
    const elem = computed(() => gameStore.getElem(props.id))
    
</script>

<template>
    
	<div class="row gx-2 align-items-center justify-content-end">

		<div class="col-auto">{{ $t(elem.name) }}</div>
		<div v-if="elem.img != undefined" class="col-auto"><img :src="elem.img" width="16" height="16" /></div>

		<div class="col-auto">
			<span class="badge d-block text-bg-dark" style="width:55px;">+ {{ formatNumber(count) }} /s</span>
		</div>
		
	</div>
    
</template>
