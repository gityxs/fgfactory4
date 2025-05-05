<script setup>

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()
	
	const route = useRoute()
	
	const item = computed(() => store.elems.find(e => e.id == route.params.id))
	
	onMounted(() => {
	
		let page = store.elems.find(e => e.link == '/item/' + route.params.id)
		let entry = store.elems.find(e => e.id == page.parentId)
		let tab = store.elems.find(e => e.id == entry.parentId)
		
		let tabs = store.elems.filter(e => e.type == 'tab')
		let index = tabs.indexOf(tab)
		
		store.activeTab = index.toString()
	})
	
	const storage = computed(() => store.elems.find(e => e.type == 'storage' && e.itemId == route.params.id))

	const manual = computed(() => store.elems.find(e => e.type == 'manual' && e.itemId == route.params.id))

	const production = computed(() => store.elems.find(e => e.type == 'production' && e.itemId == route.params.id))
	
</script>

<template>

	<div class="grid gap-6">
		
		<UCard variant="outline">
			<div class="grid gap-6">
			
				<div class="flex items-center gap-2">
				
					<img :src="item.img" width="24" height="24" />
					<span class="truncate text-lg font-semibold">{{ $t(item.label) }}</span>
					
					<div class="ms-auto flex items-center gap-2">
						<elem-available-page v-if="item.type == 'machine' || item.type == 'storer'" :id="item.id" />
						<elem-count-page :id="item.id" />
					</div>
					
				</div>
				
				<div v-if="manual" class="grid gap-3">

					<span class="text-xs font-semibold opacity-75">{{ $t('word_manual') }}</span>
					<USeparator />

					<div class="flex items-end gap-3">
						<line-recipe :id="manual.id" class="flex-1" />
						<line-start :id="manual.id" />
					</div>
					
				</div>
				
			</div>
		</UCard>
		
		<UCard v-if="storage" variant="outline">
			<div class="grid gap-6">
			
				<span class="text-lg font-semibold">{{ $t('word_storage') }}</span>				

				<div class="lg:w-1/2 grid gap-3">
					<span class="text-xs font-semibold opacity-75">{{ $t('word_assignment') }}</span>
					<USeparator />					
					<line-assignment :id="storage.id" />
				</div>
				
			</div>
		</UCard>

		<UCard v-if="production" variant="outline">
			<div class="grid gap-6">

				<span class="text-lg font-semibold">{{ $t('word_production') }}</span>
				
				<div class="lg:w-1/2 grid gap-3">
					<span class="text-xs font-semibold opacity-75">{{ $t('word_assignment') }}</span>
					<USeparator />					
					<line-assignment :id="production.id" />
				</div>
			
				<div class="grid gap-3">

					<span class="text-xs font-semibold opacity-75">{{ $t('word_crafting') }}</span>
					<USeparator />
					
					<div class="flex items-end gap-3">
						<line-recipe :id="production.id" class="flex-1" />
						<line-start :id="production.id" />
					</div>
					
				</div>
				
			</div>
		</UCard>
		
	</div>

</template>