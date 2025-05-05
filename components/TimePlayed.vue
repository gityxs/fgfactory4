<script setup>

	import { useAppStore } from '~/store.js'    
	const store = useAppStore()

	const value = computed(() => {
	
        let val = store.timePlayed
        
        if (val > 0 && val < 1) val = Math.floor(val * 1000) + ' ms'
        else if (val > 0) {
        
            let h = Math.floor(val / 3600)
            if (h < 10) { h = '0' + h }
            
            let m = Math.floor(Math.floor(val / 60) % 60)
            if (m < 10) { m = '0' + m }
            
            let s = Math.floor(val % 60)
            if (s < 10) { s = '0' + s }
            
            val = h + ':' + m + ':' + s
        }
        
        return val
	})
	
</script>

<template>
	
	<span>{{ value }}</span>
	
</template>
