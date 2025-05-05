<script setup>

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const toast = useToast()
	
	const { t } = useI18n()
	
	const importData = ref('')
	
	const loading = ref(false)
	
	const doImport = () => {
		
		importData.value = importData.value.trim()
		
		if (!importData.value) {
		
			toast.add({ title:t('import_empty'), timeout:0, color:'error', icon:'i-lucide-badge-alert' })
			return
		}
		
		if (importData.value.length % 4 !== 0) {
		
			toast.add({ title:t('import_corrupted'), timeout:0, color:'error', icon:'i-lucide-badge-alert' })
			return
		}
		
		loading.value = true
		
		store.resetInProgress = true
		
		localStorage.setItem(store.localStorageName, importData.value)
		
		window.location.replace('/')
	}
	
</script>

<template>

	<div class="flex flex-col gap-6">
		
		<UCard variant="outline">
			<div class="grid gap-3">
			
				<span class="text-xl font-bold">{{ $t('options_localData') }}</span>
	
				<UTextarea class="w-full" size="xs" :rows="3" :placeholder="store.localStorageData" disabled readonly />
				
				<div class="grid grid-cols-3 gap-3">
					<btn-wipe />
					<btn-export />
					<btn-download />
				</div>
				
			</div>
		</UCard>
		
		<UCard variant="outline">
			<div class="grid gap-3">

				<span class="text-xl font-bold">{{ $t('options_importData') }}</span>
				
				<UTextarea v-model="importData" :rows="3" class="w-full" :ui="{ base:'text-xs' }" />
				
				<div class="grid grid-cols-3 gap-3 justify-end">
				
					<UButton :loading="loading" class="col-start-3 justify-center" icon="i-lucide-upload" color="neutral" variant="subtle" :label="$t('word_import')" @click="doImport()" />
				
				</div>
				
			</div>
		</UCard>
		
	</div>

</template>
