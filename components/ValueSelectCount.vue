<script setup>

    const props = defineProps([ 'elem' ])
    
    const values = computed(() => {
    
        let ret = []
        
        props.elem.select.values.forEach(value => {            
            ret.push({ count:value, name:'value_' + value })
        })
        
        return ret
    })
    
</script>

<template>
    
    <select v-model="elem.select.count" class="form-control text-end" :disabled="values.length <= 1 || (elem.status && elem.status != 'waiting')" style="width:50px;">
        <option v-for="value in values" :key="value.count" :value="value.count">{{ $t(value.name) }}</option>
    </select>
    
</template>
