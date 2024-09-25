<script setup>

    import { formatNumber } from '~/store/utils.js'
    
    const props = defineProps([ 'elem' ])
    
</script>

<template>
    
    <span :class="{ 'text-success':elem.prod > 0, 'text-danger':elem.prod < 0, 'opacity-50':elem.prod == 0 }"><span v-if="elem.prod > 0">+</span>{{ formatNumber(elem.prod) }} /s</span>
    
</template>
