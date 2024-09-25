<script setup>

    import { formatTime } from '~/store/utils.js'    
	
    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
</script>

<template>

    <div id="modalOffline" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <span class="text-normal">{{ $t('modalOffline_title') }}</span>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" @click="appStore.currentModalId = null"><font-awesome-icon icon="fas fa-fw fa-times" /></button>
                </div>

                <div class="modal-body">
                    <div class="row g-2">
                    
                        <div class="col-12 text-center">
                            <span class="fs-6 text-white">{{ $t('modalOffline_text') }}</span>
                        </div>
                        
                        <div class="col-12 text-center">
                            <span class="text-normal">{{ $t('modalOffline_info') }}</span> <span class="text-white">{{ formatTime(appStore.offlineTime) }}</span>
                        </div>
                        
                        <div class="col-12 mt-3">
                            <div class="row justify-content-center">
                                <div class="col-5 col-lg-3">
                                    <button type="button" class="w-100 btn btn-secondary" data-bs-dismiss="modal" @click="appStore.currentModalId = null">
                                        <span><font-awesome-icon icon="fas fa-fw fa-arrow-right-long" /></span>
                                        <span class="ms-2">{{ $t('modalOffline_close') }}</span>
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
