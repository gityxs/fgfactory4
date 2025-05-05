<script setup>
	
	const props = defineProps([ 'id' ])
	
	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))
	
	const outputs = computed(() => elem.value.getOutputs())

	const inputs = computed(() => elem.value.getInputs())
	
</script>

<template>
	
	<div class="flex flex-nowrap items-start justify-end gap-2">
		
		<div v-if="inputs" class="flex items-center gap-1">
			<btn-input v-for="input in inputs" :key="input.id" :id="input.id" :count="input.count" />
		</div>
		
		<div class="opacity-75" style="line-height:32px;">
			<UIcon v-if="inputs" name="i-lucide-move-right" />
		</div>
		
		<div class="flex items-center gap-1">
			<btn-output v-for="output in outputs" :key="output.id" :id="output.id" :count="output.count" />
		</div>
		
	</div>
	
</template>
