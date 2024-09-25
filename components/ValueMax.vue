<script setup>

    import { formatNumber } from '~/store/utils.js'
    
    const props = defineProps([ 'elem' ])
    
</script>

<template>

    <span>{{ formatNumber(elem.max) }}</span>
    
</template>
