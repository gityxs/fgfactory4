<script setup>

    const { t } = useI18n()

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? t(titleChunk) + ' - ' + t('game_title') : t('game_title')
        }
    })
	
</script>

<template>
        
	<NuxtLoadingIndicator color="#f89e1a" />
	
	<NuxtLayout>	
		<NuxtPage />
	</NuxtLayout>
    
</template>
