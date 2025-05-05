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
		
		window.location.replace('/fgfactory/')
	}
	
</script>

<template>

	<div class="flex flex-col gap-6">
		
		<UCard variant="outline">
			<div class="grid gap-3">
			
				<span class="text-xl font-bold">{{ $t('options_about') }}</span>				
				<span class="text-xs opacity-75">{{ $t('options_love') }}</span>
				
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
					<UButton class="justify-center" variant="subtle" color="neutral" :label="$t('word_patreon')" :avatar="{ src:'/fgfactory/patreon.png' }" target="_blank" to="https://www.patreon.com/bePatron?u=61283131" />
					<UButton class="justify-center" variant="subtle" color="neutral" :label="$t('word_kofi')" :avatar="{ src:'/fgfactory/kofi.png' }" target="_blank" to="https://ko-fi.com/freddecgames" />
					<UButton class="justify-center" variant="subtle" color="neutral" :label="$t('word_paypal')" :avatar="{ src:'/fgfactory/paypal.png' }" target="_blank" to="https://www.paypal.com/donate/?hosted_button_id=2JBFJCVPABGXJ" />
					<UButton class="justify-center" variant="subtle" color="neutral" :label="$t('word_discord')" :avatar="{ src:'/fgfactory/discord.png' }" target="_blank" to="https://discord.gg/WhvQvZqyq5" />
				</div>
				
				<p class="text-xs">
					<span class="opacity-75">{{ $t('options_iconsBy') }}</span>
					<ULink to="https://lucide.dev/icons/" :active="true" target="_blank">Lucide</ULink>,
					<ULink to="https://www.flaticon.com/" :active="true" target="_blank">Flaticon</ULink>,
					<ULink to="https://www.freepik.com/" :active="true" target="_blank">Freepik</ULink>
				</p>

				<p class="text-xs">
					<span class="opacity-75">{{ $t('options_scenariosBy') }}</span>
					<ULink to="https://www.factorio.com/" :active="true" target="_blank">Factorio</ULink>,
					<ULink to="https://www.satisfactorygame.com/" :active="true" target="_blank">Satisfactory</ULink>
				</p>
				
			</div>
		</UCard>
		
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
