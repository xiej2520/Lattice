<template>
	<div class="h-full">
		<textarea
			class="h-64
			block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
			dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			v-model="text"
			@input="render"
			placeholder="\begin{tikzpicture}
	\end{tikzpicture}"
		></textarea>
		<div id="tikzOutContainer" class="h-full w-full p-2">
			<div id="tikzOut" class="bg-white dark:bg-white border-2 border-blue-500 p-8 m-8">
			</div>
		</div>
	</div>
</template>

<script setup>

const text = ref(`\\begin{tikzpicture}
	\\draw (0,0) circle (1);
\\end{tikzpicture}`
);

async function render() {
	const tikzOut = document.getElementById("tikzOut");

	let machine = await window.process_tikz(text.value, tikzOut);

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
