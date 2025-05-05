<script setup>

	const { t } = useI18n()
	
	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const doDownload = () => {
	
		let node = document.createElement('a')
		node.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(store.localStorageData))
		node.setAttribute('download', store.localStorageName + '_save_' + (new Date).getTime() + '.txt')
		node.style.display = 'none'
		document.body.appendChild(node)

		node.click()

		document.body.removeChild(node)
	}
	
</script>

<template>
	
	<UButton class="justify-center" icon="i-lucide-download" color="neutral" variant="subtle" :label="$t('word_download')" @click="doDownload" />
	
</template>
