<script setup>

    const props = defineProps([ 'elem' ])
    
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
    const costs = computed(() => gameStore.getAssignCosts(props.elem))
    const inputs = computed(() => gameStore.getAssignInputs(props.elem))
    const outputs = computed(() => gameStore.getAssignOutputs(props.elem))
    const storages = computed(() => gameStore.getAssignStorages(props.elem))
    
    const canAssign = computed(() => {
    
        let availableCount = gameStore.getAvailableCount(props.elem.assign.id)
        if (props.elem.select.count > availableCount) return false
        
		if (costs.value) {
		
			let checkCosts = gameStore.checkElemCounts(costs.value)
			if (!checkCosts) return false
		}
		
		if (inputs.value) {
		
			let checkInputs = gameStore.checkElemProds(inputs.value)
			if (!checkInputs) return false
		}
        
        return true
    })
    
    const doAssign = function() {
        
        props.elem.assign.count += props.elem.select.count
    
        if (costs.value) {
            for (let id in costs.value) {
            
                let elem = gameStore.getElem(id)
                elem.count -= costs.value[id]
            }
        }
		
        if (inputs.value) {
            for (let id in inputs.value) {
            
                let elem = gameStore.getElem(id)
                elem.prod -= inputs.value[id]
            }
        }

        if (outputs.value) {
			for (let id in outputs.value) {
			
				let elem = gameStore.getElem(id)
				elem.prod += outputs.value[id]
			}
		}

        if (storages.value) {
			for (let id in storages.value) {
			
				let elem = gameStore.getElem(id)
				elem.max += storages.value[id]
			}
		}
    }
    
</script>

<template>
    
    <button type="button" class="btn btn-primary btn-icon" :class="{ 'disabled':!canAssign }" @click="if (canAssign) doAssign();">
        <font-awesome-icon icon="fas fa-plus-square" />
    </button>
    
</template>
