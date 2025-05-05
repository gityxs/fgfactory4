<script setup>
	
	const props = defineProps([ 'id' ])

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const elem = computed(() => store.elems.find(e => e.id == props.id))
</script>

<template>
	
	<UCard variant="outline">
		<div class="grid gap-6">
		
			<div class="grid gap-3">
			
				<div class="flex items-center gap-2">			
					<span class="text-lg font-semibold">{{ $t(elem.label) }}</span>				
				</div>
				
				<span v-if="elem.desc" class="text-xs opacity-75">{{ $t(elem.desc) }}</span>
				
			</div>
			
			<div class="grid gap-3">

				<span class="text-xs font-semibold opacity-75">{{ $t('word_costs') }}</span>
				<USeparator />
				
				<div class="flex items-end gap-3">
					<line-costs :id="elem.id" class="flex-1" />
					<line-complete :id="elem.id" />
				</div>
				
			</div>
			
		</div>
	</UCard>
	
</template>
