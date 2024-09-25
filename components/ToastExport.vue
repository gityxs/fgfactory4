<template>

    <div id="toastExport" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex align-items-center">
            <div class="col toast-body">{{ $t('toast_export') }}</div>
            <button type="button" class="btn-close p-2 me-2" data-bs-dismiss="toast" :aria-label="$t('toast_close')">
                <font-awesome-icon icon="fas fa-times" />
            </button>
        </div>
    </div>
    
</template>