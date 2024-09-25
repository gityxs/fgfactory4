<script setup>

    import { formatNumber } from '~/store/utils.js'
    
    const props = defineProps([ 'elem' ])
    
</script>

<template>

    <span :class="{ 'opacity-50':elem.count == 0, 'text-white':elem.count > 0 && elem.count < elem.max, 'text-danger':elem.count >= elem.max }">{{ formatNumber(elem.count, '', 0) }}</span>
    
</template>
