<script setup>

    const props = defineProps([ 'elem' ])
    
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
    const costs = computed(() => gameStore.getAssignCosts(props.elem))
    const inputs = computed(() => gameStore.getAssignInputs(props.elem))
    const outputs = computed(() => gameStore.getAssignOutputs(props.elem))
    const storages = computed(() => gameStore.getAssignStorages(props.elem))
    
    const canUnassign = computed(() => {
        
        if (props.elem.select.count > props.elem.assign.count) return false
        
        let ret = true
        
		if (outputs.value) {
			for (let id in outputs.value) {
				
				let elem = gameStore.getElem(id)
				let newProd = elem.prod - outputs.value[id]
				if (newProd < 0) return false
			}
		}
        
		if (storages.value) {
			for (let id in storages.value) {
				
				let elem = gameStore.getElem(id)
				let newMax = elem.max - storages.value[id]
				if (newMax < elem.count) return false
			}
		}
		
        return ret
    })
    
    const doUnassign = function() {
    
        if (costs.value) {
            for (let id in costs.value) {
            
                let elem = gameStore.getElem(id)
                elem.count += costs.value[id]
				if (elem.count > elem.max) elem.count = elem.max
				elem.count = Math.round(elem.count * 100) / 100
            }
        }
		
        if (inputs.value) {
            for (let id in inputs.value) {
            
                let elem = gameStore.getElem(id)
                elem.prod += inputs.value[id]
				elem.prod = Math.round(elem.prod * 100) / 100
            }
        }
        
		if (outputs.value) {
			for (let id in outputs.value) {
			
				let elem = gameStore.getElem(id)
				elem.prod -= outputs.value[id]
				elem.prod = Math.round(elem.prod * 100) / 100
			}
		}

        if (storages.value) {
			for (let id in storages.value) {
			
				let elem = gameStore.getElem(id)
				elem.max -= storages.value[id]
				elem.max = Math.round(elem.max * 100) / 100
			}
		}
            
        props.elem.assign.count -= props.elem.select.count
    }
    
</script>

<template>
    
    <button type="button" class="btn btn-danger btn-icon" :class="{ 'disabled':!canUnassign }" @click="if (canUnassign) doUnassign();">
        <font-awesome-icon icon="fas fa-minus-square" />
    </button>
    
</template>
