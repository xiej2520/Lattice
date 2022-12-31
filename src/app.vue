<template>
	<div>
		<!-- <NuxtWelcome /> -->
		<div class="hello-world">Hello, World!</div>
		AAAAAAAAA
	</div>
	<TikzInput></TikzInput>
</template>

<!--
<script>
export default {
	mounted() {
		let tikz1 = document.createElement("script");
		tikz1.setAttribute("type", "text/tikz");
		tikz1.innerHTML = `
		 \\begin{tikzpicture}
			\\draw (0,0) circle (1in);
		\\end{tikzpicture}
		`;
		document.body.appendChild(tikz1);

		let tikzjax = document.createElement("script");
		tikzjax.setAttribute("src", "https://tikzjax.com/v1/tikzjax.js");
		document.head.appendChild(tikzjax);
	}
}
</script>
-->

<style>
@import url(https://tikzjax.com/v1/fonts.css);
@font-face {
	font-family: "Lexend Deca";
	src: local("Lexend Deca"),
		url(./fonts/LexendDeca-VariableFont_wght.ttf) format("truetype");
}

* {
	font-family: "Lexend Deca";
}
</style>

<style scoped>
.hello-world {
	font-family: "Arial";
}
</style>
