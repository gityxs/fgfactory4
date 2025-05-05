<script setup>
	
	import ModalWipe from '~/components/ModalWipe.vue'

	const overlay = useOverlay()

	const modal = overlay.create(ModalWipe)
	
	async function doWipe() {
	
		await modal.open()
	}
	
</script>

<template>
	
	<UButton class="justify-center" color="error" variant="subtle" icon="i-lucide-trash" :label="$t('word_wipe')" @click="doWipe" />
	
</template>
