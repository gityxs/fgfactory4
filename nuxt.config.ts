export default defineNuxtConfig({
	
	ssr: false,

	compatibilityDate: '2024-11-16',
	
	devtools: { enabled: false },

	app: {

		baseURL: '/fgfactory/',	
		head: {

			charset: 'utf-8',
			viewport:'width=device-width, initial-scale=1',

			link: [{ rel:'icon', type:'image/png', href:'/fgfactory/favicon.png' }]
		},
	},

	css: ['bootstrap/dist/css/bootstrap.min.css', '@fortawesome/fontawesome-svg-core/styles.css', '~/styles.css'],
	
	modules: ['@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-gtag'],

	i18n: {
	
		lazy: true,
		legacy: false,
		langDir: 'locales',
		defaultLocale: 'en',
		detectBrowserLanguage: {

			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
			fallbackLocale: 'en',
		},
		locales: [
		
			{ code:'en', file:'en.json',  },
		],
		compilation: {
		
			strictMessage: false,
		},
	},

	gtag: { id: 'G-PW9VS80VPN' },
})