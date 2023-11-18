<script>
	import './styles.css';
	import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Explorer from '../components/Explorer.svelte';
	import OpenFiles from '../components/OpenFiles.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Avaneesh</title>
	<meta name="description" content="Avaneesh's personal portfolio made using svelte-kit" />
</svelte:head>

<div class="app">
	<Navbar />
	<div class="layout">
		<Sidebar />
		<Explorer />
		<div class="container">
			<OpenFiles />
			<slot />
		</div>
	</div>
	<Footer />
</div>

<style>
	.layout {
		display: flex;
		width: 100%;
		height: calc(100% - 3.9rem);
	}
	.container {
		width: calc(100% - 13.25rem);
		height: calc(100% - 2.2rem);
	}
	@media screen and (max-width: 768px) {
		.container {
			width: calc(100% - 3.2rem);
		}
	}
	@media screen and (max-height: 400px) {
		.container {
			width: calc(100% - 12.6rem);
		}
	}
</style>
