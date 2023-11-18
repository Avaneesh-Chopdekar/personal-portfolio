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
