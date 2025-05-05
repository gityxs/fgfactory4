<script setup>

	const props = defineProps([ 'id' ])

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))
	
	const color = computed(() => {
	
		if (!elem.value.max || elem.value.count < elem.value.max) return 'neutral'
		else return 'error'
	})
	
</script>

<template>
	
	<UBadge variant="subtle" :color="color" class="text-nowrap">
		<span :class="{ 'opacity-50':elem.count <= 0 }">{{ elem.count.toLocaleString() }}</span>
	</UBadge>
	
</template>
