<template>
	<div
		id="canvasDiv" ref="canvasDiv"
		class="min-h-[200px] min-w-[200px] h-full w-full border-blue-600 border-2"
	>
	</div>
</template>

<script lang="ts">
import * as PIXI from "pixi.js-legacy";

export default {
	mounted() {
		const pixiStore = usePixiStore();

		let canvasDiv = this.$refs.canvasDiv as HTMLDivElement;

		if (pixiStore.app === null) {
			console.log("created pixiapp")
			pixiStore.app = new PIXI.Application({
				antialias: true,
				resizeTo: canvasDiv,
			});
			pixiStore.app.ticker.maxFPS = 60;
		}
		else {
			console.log("used existing")
		}
		canvasDiv.appendChild(pixiStore.app.view as HTMLCanvasElement);
		
		let g = new PIXI.Graphics();
		g.lineStyle(0);
		g.beginFill(0x00ff00, 1);
		g.drawCircle(50, 50, 200);
		g.endFill();
		pixiStore.app.stage.addChild(g);
		let x = 200;
		let y = 300;
		pixiStore.app.ticker.add(function () {
			if (x > 800) {
				x = 0;
			}
			if (y < 0) {
				y = 645;
			}
			x++;
			y--;
			g.beginFill(0xff00ff, 1);
			g.drawCircle(x, y, 20);
			g.endFill();
		});
		pixiStore.app.start();
	},
	unmounted() {
		const pixiStore = usePixiStore();
		(pixiStore.app?.view as HTMLCanvasElement).remove();
		pixiStore.app?.destroy(); // stop memory leak?
		pixiStore.app = null;
	}
}

</script>
