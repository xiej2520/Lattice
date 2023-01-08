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
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	srcDir: "src/",
});
