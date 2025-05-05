<script setup>
	
	const props = defineProps([ 'id' ])

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))

	const can = computed(() => {
		
		if (elem.value.status == 'stopped') return false
		
		return true
	})
	
	function doClick() {
	
		if (!can.value) return

		let inputs = elem.value.getInputs()
		if (inputs) {
			
			inputs.forEach(input => {
				
				let inputElem = store.elems.find(e => e.id == input.id)
				inputElem.count = Math.min(inputElem.count + input.count, inputElem.max)
			})
		}
		
		elem.value.status = 'stopped'
		elem.value.remainingSeconds = elem.value.seconds
	}

</script>

<template>
	
	<UTooltip :text="$t('word_stop')" :delay-duration="0">
		<UButton icon="i-lucide-square" color="error" variant="subtle" :disabled="!can" @click="doClick()"/>
	</UTooltip>
	
</template>
