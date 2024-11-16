<script setup>
    
    definePageMeta({ layout:'home', title:'page_options' })

    import { useAppStore } from '~/store/appStore.js'    
    const appStore = useAppStore()
    
    const { locale, locales, setLocale } = useI18n()

    const changeLocale = function(code) {
    
        setLocale(code)
        appStore.locale = code
    }

</script>

<template>

	<div class="container p-2">
		<div class="row g-3">
			
			<div class="col-12">
				<div class="card">
					
					<div class="card-header">
						<span class="fs-6 text-white">{{ $t('options_about') }}</span>
					</div>
					
					<div class="card-body">
						<div class="row gx-2 gy-3">

							<div class="col-12">
								<div class="row gy-2 gx-1">

									<div class="col-12">
										<span>{{ $t('options_love') }}</span>
									</div>

									<div class="col">
										<a href="https://www.patreon.com/bePatron?u=61283131" class="w-100 btn btn-secondary" target="_blank">
											<img src="/patreon.png" width="16" height="16" />
											<span class="ms-2 d-none d-sm-inline">{{ $t('options_patreon') }}</span>
										</a>
									</div>

									<div class="col">
										<a href="https://ko-fi.com/freddecgames" class="w-100 btn btn-secondary" target="_blank">
											<img src="/kofi.png" width="16" height="16" />
											<span class="ms-2 d-none d-sm-inline">{{ $t('options_kofi') }}</span>
										</a>
									</div>

									<form class="col" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
										<input type="hidden" name="cmd" value="_s-xclick">
										<input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
										<button type="submit" class="w-100 btn btn-secondary">
											<img src="/paypal.png" width="16" height="16" />
											<span class="ms-2 d-none d-sm-inline">{{ $t('options_paypal') }}</span>
										</button>
									</form>

									<div class="col">
										<a href="https://discord.gg/ZXrggavUpv" class="w-100 btn btn-secondary" target="_blank">
											<img src="/discord.png" width="16" height="16" />
											<span class="ms-2 d-none d-sm-inline">{{ $t('options_discord') }}</span>
										</a>
									</div>
									
								</div>
							</div>
							
							<div class="col-12">
								<span>{{ $t('options_iconsBy') }}</span>
								<a href="https://fontawesome.com/" target="_blank">Fontawesome</a>,
								<a href="https://www.flaticon.com/" target="_blank">Flaticon</a>,
								<a href="https://www.freepik.com/" target="_blank">Freepik</a>
							</div>
							
							<div class="col-12">
								<span>{{ $t('options_scenariosBy') }}</span>
								<a href="https://www.factorio.com/" target="_blank">Factorio</a>,
								<a href="https://www.satisfactorygame.com/" target="_blank">Satisfactory</a>,
								<a href="https://store.steampowered.com/app/1366540/" target="_blank">Dyson Sphere Program</a>,
								<a href="https://store.steampowered.com/app/1284190/" target="_blank">The Planet Crafter</a>
							</div>
							
						</div>
					</div>

				</div>
			</div>

			<div class="col-12">
				<div class="card">
				
					<div class="card-header">
						<span class="fs-6 text-white">{{ $t('options_settings') }}</span>
					</div>

					<div class="card-body">
						<div class="row gy-2 gx-1">

							<div v-for="l in locales" :key="l.code" class="col-auto">
								<button type="button" class="btn btn-secondary" :class="{ 'text-bg-primary': locale == l.code }" @click="changeLocale(l.code)">
									<img :src="'/fgfactory/flags/' + l.code + '.png'" width="24" height="24" />
								</button>
							</div>

							<div class="col-12">
								<div class="ms-1 form-check">
									<input type="checkbox" class="form-check-input" id="showLocked" v-model="appStore.showLocked">
									<label class="form-check-label" for="showLocked">{{ $t('options_showLocked') }}</label>
								</div>
							</div>
							
							<div class="col-12">
								<div class="ms-1 form-check">
									<input type="checkbox" class="form-check-input" id="showCompleted" v-model="appStore.showCompleted">
									<label class="form-check-label" for="showCompleted">{{ $t('options_showCompleted') }}</label>
								</div>
							</div>
							
						</div>
					</div>

				</div>
			</div>

			<div class="col-12">
				<div class="card">
				
					<div class="card-header">
						<span class="fs-6 text-white">{{ $t('options_localData') }}</span>
					</div>
					
					<div class="card-body">
						<div class="row gx-1 gy-3">
						
							<div class="col-12 col-md-6">
								<div class="row gy-2 gx-1">
								
									<div class="col-12">
										<textarea id="localData" spellcheck="false" rows="3" class="w-100 form-control" disabled readonly>{{ appStore.localStorageData }}</textarea>
									</div>
									
									<div class="col-4">
										<button type="button" class="w-100 btn btn-danger px-0" @click="appStore.showModal('modalWipe');">
											<span><font-awesome-icon icon="fas fa-skull" /></span>
											<span class="ms-2">{{ $t('options_wipeSave') }}</span>
										</button>
									</div>
									
									<div class="col-4">
										<button type="button" class="w-100 btn btn-secondary px-0" @click="appStore.exportAppState();">
											<span><font-awesome-icon icon="fas fa-copy" /></span>
											<span class="ms-2">{{ $t('options_exportSave') }}</span>
										</button>
									</div>
									
									<div class="col-4">
										<button type="button" class="w-100 btn btn-secondary px-0" @click="appStore.downloadAppState();">
											<span><font-awesome-icon icon="fas fa-download" /></span>
											<span class="ms-2">{{ $t('options_downloadSave') }}</span>
										</button>
									</div>
									
								</div>
							</div>

							<div class="col-12 col-md-6">
								<div class="row gy-2 gx-1">
								
									<div class="col-12">
										<textarea spellcheck="false" rows="3" id="importData" class="w-100 form-control"></textarea>
									</div>
									
									<div class="col-4 ms-auto">
										<button type="button" class="w-100 btn btn-secondary px-0" @click="appStore.importAppState();">
											<span><font-awesome-icon icon="fas fa-upload" /></span>
											<span class="ms-2">{{ $t('options_importSave') }}</span>
										</button>
									</div>
									
								</div>
							</div>
						
						</div>
					</div>
				</div>
			</div>
		
		</div>
	</div>
	
	<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">
		<toast-export />
		<toast-import-empty />
		<toast-import-corrupted />
	</div>
	
	<modal-wipe />
	
</template>
