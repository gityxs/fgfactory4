<script setup>
	
	const props = defineProps([ 'id' ])
	
	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))

	const color = computed(() => {
	
		if (elem.value.availableCount > 0) return 'success'
		else return 'error'
	})

</script>

<template>
	
	<UTooltip :text="$t(elem.label)" :delay-duration="0">
		<UChip size="3xl" :color="color" position="bottom-left" :text="elem.availableCount.toLocaleString()">
			<UButton :avatar="{ src:elem.img }" :color="color" variant="subtle" :to="'/item/' + elem.id"/>
		</UChip>
	</UTooltip>
	
</template>
