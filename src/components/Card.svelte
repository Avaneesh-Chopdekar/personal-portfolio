<script lang="ts">
	export let title: string;
	export let description: string;
	export let imgSrc: string;
	export let slug: string;
	export let tags: string[];

	let trimmedDesc = description.length > 80 ? description.substring(0, 80) + '...' : description;
</script>

<a href={`/articles/${slug}`}>
	<img src={imgSrc} alt="Preview" width="250" height="150" />
	<p class="title">{title}</p>
	<p class="description">{trimmedDesc}</p>
	<div class="tags">
		{#each tags as tag (tag)}
			<p class="tag">{tag}</p>
		{/each}
	</div>
</a>

<style>
	a {
		background-color: var(--accent);
		display: inline-block;
		border-radius: 0.25rem;
		width: 250px;
		min-height: 300px;
		height: fit-content;
	}
	a:hover {
		cursor: pointer;
	}
	a:active,
	a:focus {
		outline: 1px solid var(--contrast);
	}
	img {
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		object-fit: cover;
	}
	.title {
		font-size: 1.5rem;
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
		/* border: 1px solid white; */
		background-color: var(--darker);
		border-radius: 1rem;
	}
</style>
