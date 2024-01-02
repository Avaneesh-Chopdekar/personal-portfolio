<script>
	export let project;
	const { title, description, tags, coverImage, githubLink, hostedLink, appGithubLink } =
		project.fields;
</script>

<li class="card">
	<img src={coverImage.fields.file.url} alt="Preview" width="250" height="150" />
	<p class="title">{title}</p>
	<p class="description">{description}</p>
	<div class="tags">
		{#each tags as tag (tag)}
			<p class="tag">{tag}</p>
		{/each}
	</div>
	<div class="btn-group">
		{#if hostedLink}
			<a href={hostedLink} target="_blank" rel="noopener noreferrer">Visit</a>
		{/if}
		<a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
		{#if appGithubLink}
			<a href={appGithubLink} target="_blank" rel="noopener noreferrer">App</a>
		{/if}
	</div>
</li>

<style>
	.card {
		background-color: var(--accent);
		display: inline-block;
		border-radius: 0.25rem;
		width: 250px;
		min-height: 300px;
		height: fit-content;
	}
	img {
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		object-fit: fill;
		width: 100%;
	}
	.title {
		font-size: 1.25rem;
		font-weight: bold;
		padding: 0.5rem 1rem;
	}
	.description {
		padding: 0 1rem 0.5rem 1rem;
	}
	.tags {
		padding: 0 1rem;
		margin-bottom: 0.5rem;
		display: flex;
		flex-wrap: wrap;
	}
	.tag {
		font-size: 0.9rem;
		padding: 0.25rem 0.75rem;
		margin-right: 0.25rem;
		margin-bottom: 0.25rem;
		border: 1px solid white;
		/* background-color: var(--darker); */
		border-radius: 1rem;
	}
	.btn-group {
		display: flex;
	}
	a {
		padding: 0.25rem 0.75rem;
		margin-top: 0;
		margin-left: 1rem;
		margin-right: 0;
		margin-bottom: 0.5rem;
		background-color: var(--darker);
		border-radius: 0.25rem;
		/* font-size: 0.9rem; */
	}
	@media screen and (max-width: 608px) {
		.card {
			width: 90%;
			margin: 0 auto;
		}
	}
</style>
