<script setup>

	const props = defineProps([ 'id' ])

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))
	
</script>

<template>
	
	<UBadge variant="subtle" color="success" class="text-nowrap">
		<span>{{ elem.availableCount.toLocaleString() }} {{ $t('word_available') }}</span>
	</UBadge>
	
</template>
