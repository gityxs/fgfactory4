<script setup>

    import { formatTime } from '~/store/utils.js'
    
    const props = defineProps([ 'elem' ])
    
    const percent = computed(() => {
        
        if (props.elem.build.status === 'waiting') return 0        
        return 100 - Math.floor(100 * props.elem.build.remainingSeconds / (props.elem.build.seconds * props.elem.select.count))
    })
    
</script>

<template>
    
    <div class="progress" style="height:3px;">
        <div class="progress-bar bg-success" :style="'width:' + percent + '%;'" />
    </div>
    
</template>
