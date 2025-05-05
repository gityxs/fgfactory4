<script setup>
	
	const props = defineProps([ 'id' ])
	
	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))
	
	const costs = computed(() => elem.value.getCosts())
	
</script>

<template>
	
	<div class="flex items-center gap-1">
		<btn-cost v-for="cost in costs" :key="cost.id" :id="cost.id" :count="cost.count" />
	</div>
	
</template>
