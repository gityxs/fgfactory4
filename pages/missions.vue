<script setup>

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const missions = computed(() => store.elems.filter(e => e.type == 'mission'))
	
</script>

<template>

	<div class="flex flex-col gap-6">
		
		<UCard variant="outline">		
			<div class="grid gap-2">
			
				<span class="text-xl font-bold">{{ $t(store.currentScenario.title) }}</span>				
				<span class="text-xs opacity-75">{{ $t(store.currentScenario.desc) }}</span>				
		
				<UAlert class="justify-center text-center" :title="$t('disclaimer')" color="error" variant="subtle" icon="i-lucide-badge-alert" />
				
			</div>			
		</UCard>
		
		<card-mission v-for="mission in missions" :key="mission.id" :id="mission.id" />
		
	</div>

</template>
