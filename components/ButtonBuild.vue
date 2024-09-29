<script setup>

    const props = defineProps([ 'elem', 'iconPlay', 'iconStop' ])
    
    import { useGameStore } from '~/store/gameStore.js'    
    const gameStore = useGameStore()
    
    const costs = computed(() => gameStore.getBuildCosts(props.elem))
    const inputs = computed(() => gameStore.getBuildInputs(props.elem))
    
    const canBuild = computed(() => {
    
        if (props.elem.build.status != 'waiting') return false
        
		if (props.elem.count + props.elem.select.count > props.elem.max) return false
		
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
    
    const doBuild = function() {
    
        if (inputs.value) {
            for (let id in inputs.value) {
            
                let elem = gameStore.getElem(id)
                elem.prod -= inputs.value[id]
				elem.prod = Math.round(elem.prod * 100) / 100
            }
        }
		
        if (costs.value) {
            for (let id in costs.value) {
            
                let elem = gameStore.getElem(id)
                elem.count -= costs.value[id]
				elem.count = Math.round(elem.count * 100) / 100
            }
        }
        
		if (props.elem.build.seconds && props.elem.build.seconds > 0) {
		
			props.elem.build.status = 'started'
			props.elem.build.remainingSeconds = props.elem.build.seconds * props.elem.select.count
		}
		else {
		
			gameStore.onBuild(props.elem)
		}
    }
    
</script>

<template>
    
    <button type="button" class="btn btn-primary btn-icon" :class="{ 'disabled':!canBuild }" @click="if (canBuild) doBuild();">
        <font-awesome-icon v-if="elem.build.seconds" icon="fas fa-play" />
        <font-awesome-icon v-else icon="fas fa-check-circle" />
    </button>
    
</template>
