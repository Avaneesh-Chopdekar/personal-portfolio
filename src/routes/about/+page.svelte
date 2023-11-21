<svelte:head>
	<title>About | Avaneesh</title>
</svelte:head>

<main class="about">
	<h2>Fullstack <span>Web Developer</span></h2>
	<p>
		My journey in web development revolves around one principle: to build websites that make a
		difference. I thrive on developing applications that solve problems, enhance experiences, and
		leave a lasting impact on users
	</p>
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		background-image: url('../../lib/images/bg/about-bg.svg');
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		padding-left: 2rem;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
	h2 {
		font-size: 4rem;
		text-align: start;
		line-height: 4rem;
		padding-bottom: 1.5rem;
	}
	p {
		font-size: 1.25rem;
		text-wrap: balance;
		width: 75%;
	}
	@media screen and (max-width: 768px) {
		main {
			justify-content: flex-start;
			padding-top: 2.5rem;
			padding-left: 1.5rem;
			padding-bottom: 0;
		}
		h2 {
			font-size: 2.5rem;
			padding-bottom: 1rem;
			line-height: normal;
		}
		p {
			width: 90%;
		}
		span::before {
			content: '\a';
			white-space: pre;
		}
	}
	@media screen and (max-height: 400px) {
		main {
			padding-left: 1.5rem;
			padding-bottom: 0;
		}
		h2 {
			font-size: 2.5rem;
			padding-bottom: 0.5rem;
			line-height: normal;
		}
		p {
			font-size: 1rem;
		}
	}
</style>
