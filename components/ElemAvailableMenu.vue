<script setup>

	const props = defineProps([ 'id' ])

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))
	
</script>

<template>
	
	<UBadge v-if="elem.availableCount > 0" variant="subtle" color="success" class="text-nowrap">
		<span>{{ elem.availableCount.toLocaleString() }}</span>
	</UBadge>
	
</template>
