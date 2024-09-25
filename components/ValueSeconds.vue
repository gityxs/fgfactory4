<script setup>

    import { formatTime } from '~/store/utils.js'
    
    const props = defineProps([ 'elem' ])
    
</script>

<template>
    
    <div v-if="elem.build.status === 'waiting'" class="text-end">{{ formatTime(elem.build.seconds * elem.select.count) }}</div>
    <div v-else class="text-end text-yellow">{{ formatTime(elem.build.remainingSeconds) }}</div>
    
</template>
