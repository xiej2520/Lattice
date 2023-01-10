// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			script: [
				{ type: "text/javascript", src: "tikzjax.js" }
			]
		}
	},
	colorMode: {
		classSuffix: ""
	},
	css: ["~/assets/css/main.css"],
	imports: {
		dirs: ["store"],
	},
	modules: [
		"@nuxtjs/color-mode",
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt",
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	srcDir: "src/",
});
