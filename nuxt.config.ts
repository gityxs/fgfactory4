export default defineNuxtConfig({
	
	ssr:false,
	
	compatibilityDate:'2024-11-01',

	devtools:{ enabled:false },
	
	modules:[ '@nuxt/ui', '@nuxtjs/i18n', '@pinia/nuxt' ],

	app:{

		head:{

			charset:'utf-8',
			viewport:'width=device-width, initial-scale=1',
			
			link:[{ rel:'icon', type:'image/png', href:'/favicon.png' }],
		},
	},
	
	css:[ '~/main.css' ],
	
	i18n:{
		
		defaultLocale:'en',
		locales:[
		
			{ code:'en', name:'English', file:'en.json' },
		],
		bundle:{
			
			optimizeTranslationDirective: false,
		},
	}
})
