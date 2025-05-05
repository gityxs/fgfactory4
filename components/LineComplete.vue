<script setup>
	
	const props = defineProps([ 'id' ])
	
	import { useAppStore, formatTime } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))
	
</script>

<template>
	
	<div class="flex items-center gap-2">
		<btn-complete class="ms-auto" :id="elem.id" />		
	</div>
	
</template>
