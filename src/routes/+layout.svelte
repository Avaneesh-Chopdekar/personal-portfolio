<script>
	import './styles.css';
	import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Explorer from '../components/Explorer.svelte';
	import OpenFiles from '../components/OpenFiles.svelte';
	import Footer from '../components/Footer.svelte';
</script>

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
	.app {
		width: 100%;
		height: 100%;
	}
	.layout {
		display: flex;
		width: 100%;
		height: calc(100% - 3.9rem);
	}
	.container {
		width: calc(100% - 11.25rem);
		height: calc(100% - 2.4rem);
	}
	@media screen and (max-width: 768px) {
		.container {
			width: calc(100% - 3.2rem);
		}
	}
	@media screen and (max-height: 400px) and (min-width: 768px) {
		.container {
			width: calc(100% - 12rem);
		}
	}
	@media screen and (max-height: 400px) and (max-width: 768px) {
		.container {
			width: calc(100% - 2.45rem);
		}
	}
</style>
