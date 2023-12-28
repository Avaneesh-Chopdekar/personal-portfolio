<svelte:head>
	<title>Avaneesh</title>
	<meta name="description" content="Avaneesh's personal portfolio made using svelte-kit" />
</svelte:head>

<main>
	<div class="background">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
	<div class="content">
		<h2>Hey There! <span>I'm Avaneesh</span></h2>
		<p>Every line of code I write is a step closer to unlocking limitless possibilities.</p>
	</div>
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
	}

	main div {
		grid-row-start: 1;
		grid-column-start: 1;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 1;
		padding: 0 2rem;
	}
	.content h2 {
		font-size: 4rem;
	}
	.content p {
		padding-top: 1rem;
		font-size: 1.5rem;
	}
	@media screen and (max-width: 768px) {
		.content {
			text-align: center;
		}
		.content h2 {
			font-size: 2.75rem;
		}
		.content h2 span::before {
			content: '\a';
			white-space: pre;
		}
	}
	@media screen and (max-height: 400px) {
		.content {
			text-align: center;
		}
		.content h2 {
			font-size: 3rem;
		}
	}

	@keyframes move {
		100% {
			transform: translate3d(0, 0, 1px) rotate(360deg);
		}
	}

	.background {
		position: relative;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #3e1e68;
		overflow: hidden;
	}

	.background span {
		width: 20vmin;
		height: 20vmin;
		border-radius: 20vmin;
		backface-visibility: hidden;
		position: absolute;
		animation: move;
		animation-duration: 45;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.background span:nth-child(0) {
		color: #583c87;
		top: 54%;
		left: 13%;
		animation-duration: 42s;
		animation-delay: -4s;
		transform-origin: -20vw -4vh;
		box-shadow: 40vmin 0 5.208291252145697vmin currentColor;
	}
	.background span:nth-child(1) {
		color: #ffacac;
		top: 85%;
		left: 76%;
		animation-duration: 37s;
		animation-delay: -3s;
		transform-origin: 6vw 1vh;
		box-shadow: -40vmin 0 5.763051501866575vmin currentColor;
	}
	.background span:nth-child(2) {
		color: #ffacac;
		top: 8%;
		left: 96%;
		animation-duration: 17s;
		animation-delay: -49s;
		transform-origin: 10vw 10vh;
		box-shadow: -40vmin 0 5.478363778531383vmin currentColor;
	}
	.background span:nth-child(3) {
		color: #583c87;
		top: 23%;
		left: 32%;
		animation-duration: 45s;
		animation-delay: -28s;
		transform-origin: -18vw 19vh;
		box-shadow: 40vmin 0 5.251502430892342vmin currentColor;
	}
	.background span:nth-child(4) {
		color: #e45a84;
		top: 63%;
		left: 65%;
		animation-duration: 12s;
		animation-delay: -4s;
		transform-origin: 2vw -13vh;
		box-shadow: 40vmin 0 5.768241229052669vmin currentColor;
	}
	.background span:nth-child(5) {
		color: #e45a84;
		top: 14%;
		left: 63%;
		animation-duration: 18s;
		animation-delay: -32s;
		transform-origin: -11vw 12vh;
		box-shadow: -40vmin 0 5.6574506167885215vmin currentColor;
	}
	.background span:nth-child(6) {
		color: #ffacac;
		top: 38%;
		left: 35%;
		animation-duration: 7s;
		animation-delay: -2s;
		transform-origin: -5vw -6vh;
		box-shadow: -40vmin 0 5.643875236661363vmin currentColor;
	}
	.background span:nth-child(7) {
		color: #e45a84;
		top: 69%;
		left: 32%;
		animation-duration: 17s;
		animation-delay: -40s;
		transform-origin: -14vw -10vh;
		box-shadow: 40vmin 0 5.188446894549618vmin currentColor;
	}
	.background span:nth-child(8) {
		color: #583c87;
		top: 83%;
		left: 9%;
		animation-duration: 8s;
		animation-delay: -42s;
		transform-origin: 9vw 4vh;
		box-shadow: -40vmin 0 5.9782739249671435vmin currentColor;
	}
	.background span:nth-child(9) {
		color: #583c87;
		top: 17%;
		left: 17%;
		animation-duration: 43s;
		animation-delay: -17s;
		transform-origin: -15vw 22vh;
		box-shadow: 40vmin 0 5.515717202891847vmin currentColor;
	}
	.background span:nth-child(10) {
		color: #ffacac;
		top: 95%;
		left: 46%;
		animation-duration: 34s;
		animation-delay: -44s;
		transform-origin: 15vw 21vh;
		box-shadow: -40vmin 0 5.737298916796649vmin currentColor;
	}
	.background span:nth-child(11) {
		color: #e45a84;
		top: 94%;
		left: 35%;
		animation-duration: 18s;
		animation-delay: -2s;
		transform-origin: -24vw 6vh;
		box-shadow: 40vmin 0 5.081293022027961vmin currentColor;
	}
	.background span:nth-child(12) {
		color: #ffacac;
		top: 80%;
		left: 76%;
		animation-duration: 40s;
		animation-delay: -23s;
		transform-origin: 0vw -23vh;
		box-shadow: 40vmin 0 5.483332013386267vmin currentColor;
	}
	.background span:nth-child(13) {
		color: #e45a84;
		top: 89%;
		left: 89%;
		animation-duration: 54s;
		animation-delay: -12s;
		transform-origin: 7vw -11vh;
		box-shadow: 40vmin 0 5.7594871658676565vmin currentColor;
	}
	.background span:nth-child(14) {
		color: #e45a84;
		top: 84%;
		left: 82%;
		animation-duration: 23s;
		animation-delay: -8s;
		transform-origin: -19vw 6vh;
		box-shadow: -40vmin 0 5.181345138926431vmin currentColor;
	}
	.background span:nth-child(15) {
		color: #583c87;
		top: 33%;
		left: 29%;
		animation-duration: 34s;
		animation-delay: -23s;
		transform-origin: 2vw -20vh;
		box-shadow: 40vmin 0 5.127404576176851vmin currentColor;
	}
	.background span:nth-child(16) {
		color: #ffacac;
		top: 41%;
		left: 16%;
		animation-duration: 26s;
		animation-delay: -24s;
		transform-origin: -7vw 12vh;
		box-shadow: -40vmin 0 5.735885179318704vmin currentColor;
	}
	.background span:nth-child(17) {
		color: #ffacac;
		top: 89%;
		left: 10%;
		animation-duration: 13s;
		animation-delay: -45s;
		transform-origin: 10vw 12vh;
		box-shadow: 40vmin 0 5.758952685886963vmin currentColor;
	}
	.background span:nth-child(18) {
		color: #583c87;
		top: 82%;
		left: 61%;
		animation-duration: 25s;
		animation-delay: -15s;
		transform-origin: -12vw -10vh;
		box-shadow: 40vmin 0 5.710206441205648vmin currentColor;
	}
	.background span:nth-child(19) {
		color: #583c87;
		top: 17%;
		left: 77%;
		animation-duration: 20s;
		animation-delay: -43s;
		transform-origin: 4vw 10vh;
		box-shadow: 40vmin 0 5.462274543355961vmin currentColor;
	}
</style>
