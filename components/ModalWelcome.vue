<script setup>

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
	const doClick = function() {
		
		appStore.currentModalId = null
		appStore.firstTime = false
	}
	
</script>

<template>

    <div id="modalWelcome" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-body">
                    <div class="row g-2">
                    
                        <div v-if="appStore.currentScenario"class="col-12 text-center">
							<div class="fs-5 text-white">{{ $t(appStore.currentScenario.title) }}</div>
							<div>{{ $t(appStore.currentScenario.subtitle) }}</div>
                        </div>
						
                        <div class="col-12">
							<div class="rounded p-2 text-bg-danger text-center">
								v{{ appStore.version }} - {{ $t('disclaimer_text') }}
							</div>
                        </div>

                        <div class="col-12 text-center">
							<div v-if="appStore.currentScenario">{{ $t(appStore.currentScenario.desc) }}</div>
                        </div>
                        
                        <div class="col-12 mt-3">
                            <div class="row justify-content-center">
                                <div class="col-5 col-lg-3">
                                    <button type="button" class="w-100 btn btn-success" data-bs-dismiss="modal" @click="doClick()">
                                        <span><font-awesome-icon icon="fas fa-fw fa-arrow-right-long" /></span>
                                        <span class="ms-2">{{ $t('modalWelcome_close') }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
    
</template>
