import { defineStore } from "pinia";
import * as PIXI from "pixi.js";

export const usePixiStore = defineStore("pixi", {
	state: () => {
		return {
			app: null as null | PIXI.Application
		}
	},
	actions: {

	},
	getters: {

	},
});
