<script>
	export let data;
</script>

<svelte:head>
	<title>Articles | Avaneesh</title>
</svelte:head>

<main class="articles">
	<h2>Articles</h2>
	{#each data.articles as article (article.sys.id)}
		<p>{article.fields.title}</p>
	{/each}
</main>

<style>
	main {
		height: 100%;
		background-color: var(--dark);
	}
</style>
