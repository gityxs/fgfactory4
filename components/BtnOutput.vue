<script setup>
	
	const props = defineProps([ 'id', 'count' ])
	
	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const item = computed(() => store.elems.find(e => e.id == props.id))

	const color = computed(() => {
	
		if (item.value.count + props.count <= item.value.max) return 'success'
		else return 'error'
	})

</script>

<template>
	
	<UTooltip :text="$t(item.label)" :delay-duration="0">
		<UChip size="3xl" :color="color" position="bottom-right" :text="count.toLocaleString()">
			<UButton :avatar="{ src:item.img }" :color="color" variant="subtle" :to="'/item/' + item.id"/>
		</UChip>
	</UTooltip>
	
</template>
