// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			script: [
				{ type: "text/javascript", src: "tikzjax.js" }
			]
		}
	},
	srcDir: "src/",
});
