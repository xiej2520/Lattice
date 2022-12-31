<script setup>
import { ref, onMounted } from 'vue';

const text = ref(`\\begin{tikzpicture}
	\\draw (0,0) circle (1);
\\end{tikzpicture}`
);

async function render() {
	const tikzOut = document.getElementById("tikzOut");

	let machine = await process_tikz(text.value, tikzOut);

	tikzOut.style.display = 'flex';
	tikzOut.style.width = machine.paperwidth.toString() + "pt";
	tikzOut.style.height = machine.paperheight.toString() + "pt";
	tikzOut.style["align-items"] = "center";
	tikzOut.style["justify-content"] = "center";
	let svgOut = tikzOut.getElementsByTagName("svg")[0];
	svgOut.setAttribute("width", machine.paperwidth.toString() + "pt");
	svgOut.setAttribute("height", machine.paperheight.toString() + "pt");
	svgOut.setAttribute("viewBox", `-72 -72 ${machine.paperwidth} ${machine.paperheight}`);
}
</script>

<template>
	<textarea
		v-model="text"
		@input="render"
		placeholder="\begin{tikzpicture}
\end{tikzpicture}"
	></textarea>
	<div id="tikzOut">
		
	</div>
</template>
