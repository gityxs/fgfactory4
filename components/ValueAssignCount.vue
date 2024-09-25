<script setup>

    import { formatNumber } from '~/store/utils.js'
    
    const props = defineProps([ 'elem' ])
    
</script>

<template>

    <span :class="{ 'opacity-50':elem.assign.count == 0, 'text-white':elem.assign.count > 0 }"><small class="opacity-50">x</small> {{ formatNumber(elem.assign.count, 0) }}</span>
    
</template>
