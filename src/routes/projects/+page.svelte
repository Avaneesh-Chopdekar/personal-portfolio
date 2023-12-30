<script>
	export let data;
</script>

<svelte:head>
	<title>Projects | Avaneesh</title>
</svelte:head>

<main class="projects">
	<h2>Projects</h2>
	{#each data.projects as project (project.sys.id)}
		<p>{project.fields.title}</p>
	{/each}
</main>

<style>
	main {
		height: 100%;
		background-color: var(--dark);
	}
</style>
