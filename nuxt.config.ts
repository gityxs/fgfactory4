export default defineNuxtConfig({
	
	ssr:true,
	
	compatibilityDate:'2024-11-01',

	devtools:{ enabled:false },
	
	modules:[ '@nuxt/ui', '@nuxtjs/i18n', '@pinia/nuxt', '@nuxtjs/color-mode', 'nuxt-gtag' ],

	app:{
		
		baseURL: '/fgfactory/',
		
		head:{

			charset:'utf-8',
			viewport:'width=device-width, initial-scale=1',
			
			link:[{ rel:'icon', type:'image/png', href:'/fgfactory/favicon.png' }],
		},
	},

	colorMode: {
		
		preference:'dark',
		fallback:'dark',
	},
  
	css:[ '~/main.css' ],
	
	i18n:{
		
		defaultLocale:'en',

		detectBrowserLanguage: {

			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
			fallbackLocale: 'en',
		},

		locales:[
		
			{ code:'en', name:'English', file:'en.json' },
		],

		bundle:{
			
			optimizeTranslationDirective: false,
		},
	},

	gtag: { id: 'G-PW9VS80VPN' },
})
