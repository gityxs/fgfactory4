<script setup>

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
	
</script>

<template>

    <div id="modalVictory" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header bg-secondary">
                    <span class="text-normal">{{ $t('modalVictory_title') }}</span>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" @click="appStore.currentModalId = null"><font-awesome-icon icon="fas fa-fw fa-times" /></button>
                </div>

                <div class="modal-body">
                    <div class="row g-2">
                    
                        <div class="col-12 text-center">
                            <span class="fs-6 text-white">{{ $t('modalVictory_subTitle') }}</span>
                        </div>
                        
                        <div class="col-12 text-center">
                            <span class="text-normal">{{ $t('modalVictory_text') }}</span>
                        </div>
                        
                        <div class="col-12 text-center">
                            <img src="/victory.png" width="32" height="32" />
                        </div>
                        
                        <div class="col-12 text-center">
                            <span class="text-normal">{{ $t('modalVictory_info') }}</span>
                        </div>
                        
                        <div class="col-12 mt-3">
                            <div class="row justify-content-center">
                                <div class="col-5 col-lg-3">
                                    <button type="button" class="w-100 btn btn-success" data-bs-dismiss="modal" @click="appStore.currentModalId = null">
                                        <span><font-awesome-icon icon="fas fa-fw fa-trophy" /></span>
                                        <span class="ms-2">{{ $t('modalVictory_close') }}</span>
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
