<script setup>
	
	const props = defineProps([ 'id' ])
	
	import { useAppStore, formatTime } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))
	
	const seconds = computed(() => formatTime(elem.value.remainingSeconds))
	
	const percent = computed(() => (100 - Math.floor(100 * elem.value.remainingSeconds / elem.value.seconds)))
	
</script>

<template>
	
	<div class="flex items-center gap-2">
	
		<div class="flex-1 grid gap-1">
			<span>{{ seconds }}</span>
			<UProgress size="xs" v-model="percent" />
		</div>
	
		<btn-start v-if="elem.status == 'stopped'" :id="elem.id" />
		<btn-stop v-else :id="elem.id" />
		
	</div>
	
</template>
