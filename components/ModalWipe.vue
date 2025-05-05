<script setup>

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
    
	const loading = ref(false)
	
	const doWipe = () => {
		
		loading.value = true
		
		store.resetInProgress = true

		localStorage.removeItem(store.localStorageName)
		
		window.location.replace('/')
	}
	
</script>

<template>

    <UModal :close="{ onClick:() => emit('close', false) }">
        <template #content>
			<div class="p-3 flex flex-col items-center gap-4">

				<span class="text-md font-semibold">{{ $t('wipe_text') }}</span>
				
				<span class="text-sm text-red-400">{{ $t('wipe_text_2') }}</span>
				
				<UButton :loading="loading" class="w-5/12 lg:w-3/12 justify-center" color="error" variant="subtle" icon="i-lucide-trash" :label="$t('word_wipe')" @click="doWipe()" />

			</div>
        </template>
    </UModal>

</template>