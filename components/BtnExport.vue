<script setup>

	const toast = useToast()

	const { t } = useI18n()
	
	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const doExport = () => {
	
		navigator.clipboard.writeText(store.localStorageData)
		
		toast.add({ title:t('export_success'), timeout:0, color:'success', icon:'i-heroicons-check-badge' })
	}
	
</script>

<template>
	
	<UButton class="justify-center" icon="i-lucide-copy" color="neutral" variant="subtle" :label="$t('word_export')" @click="doExport" />
	
</template>
