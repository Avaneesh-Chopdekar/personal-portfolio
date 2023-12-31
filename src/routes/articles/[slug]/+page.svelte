<script>
	export let data;
</script>

<svelte:head>
	<title>{data.article?.fields.title} | Avaneesh</title>
</svelte:head>

<main class="themes">
	<h2>{data.article?.fields.title}</h2>
</main>

<style>
	main {
		height: 100%;
		background-color: var(--dark);
	}
</style>
