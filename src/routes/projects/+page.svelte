<script>
	import ProjectCard from '../../components/ProjectCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>Projects | Avaneesh</title>
</svelte:head>

<main class="projects">
	<h2>Featured Projects</h2>
	<ul>
		{#each data.projects as project (project.sys.id)}
			<ProjectCard {project} />
		{/each}
	</ul>
</main>

<style>
	main {
		height: 100%;
		background-color: var(--dark);
		overflow: auto;
	}
	h2 {
		padding: 1rem;
	}
	ul {
		margin: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
	@media screen and (max-width: 768px) {
		h2 {
			text-align: center;
		}
		ul {
			justify-content: center;
		}
	}
</style>
