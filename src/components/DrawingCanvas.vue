<template>
	<canvas
		id="canvas" ref="canvas"
		class="min-h-[200px] min-w-[200px] h-full w-full border-blue-600 border-2">
	</canvas>
</template>

<script lang="ts">
import * as PIXI from "pixi.js-legacy";

export default {
	mounted() {
		const pixiStore = usePixiStore();

		let canvas = this.$refs.canvas as HTMLCanvasElement;
		let ctx = canvas.getContext("2d");
		
		let rem = parseInt(getComputedStyle(document.documentElement).fontSize) 
			* window.devicePixelRatio || 1;
		let boundingRect = canvas.getBoundingClientRect();
		let dpr = window.devicePixelRatio || 1;
		
		let canvasWidth = boundingRect.width * dpr;
		let canvasHeight = boundingRect.height * dpr;
		
		if (pixiStore.app === null) {
			console.log("created pixiapp")
			pixiStore.app = new PIXI.Application({
				width: canvasWidth,
				height: canvasHeight
			});
		}
		else {
			console.log("used existing")
		}
		canvas.replaceWith((pixiStore.app.view as HTMLCanvasElement));
		console.log(canvasWidth, canvasHeight)
		
		let g = new PIXI.Graphics();
		g.lineStyle(0);
		g.beginFill(0xff00ff, 1);
		g.drawCircle(50, 50, 200);
		g.endFill();
		pixiStore.app.stage.addChild(g);
		console.log(pixiStore.app.stage)
	},
	unmounted() {
		const pixiStore = usePixiStore();
		(pixiStore.app?.view as HTMLCanvasElement).remove();
		pixiStore.app?.destroy();
		pixiStore.app = null;
	}
}

</script>
