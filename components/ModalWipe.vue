<script setup>

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
    
	const doWipe = function() {
		
		appStore.wipeAppState()
		appStore.currentModalId = null
	}
	
</script>

<template>

    <div id="modalWipe" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header bg-secondary">
                    <span class="fs-6 text-white">{{ $t('modalWipe_title') }}</span>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" @click="appStore.currentModalId = null"><font-awesome-icon icon="fas fa-fw fa-times" /></button>
                </div>

                <div class="modal-body">
                    <div class="row g-2">
                    
                        <div class="col-12 text-center">
                            <span class="fs-6 text-white">{{ $t('modalWipe_text') }}</span>
                        </div>

                        <div class="col-12 text-center">
                            <span class="text-danger">{{ $t('modalWipe_info') }}</span>
                        </div>

                        <div class="col-12 mt-3">
                            <div class="row justify-content-center">
                                <div class="col-5 col-lg-3">
                                    <button type="button" class="w-100 btn btn-danger" data-bs-dismiss="modal" @click="doWipe()">
                                        <span><font-awesome-icon icon="fas fa-fw fa-skull" /></span>
                                        <span class="ms-2">{{ $t('modalWipe_close') }}</span>
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