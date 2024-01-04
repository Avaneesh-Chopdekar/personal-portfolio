<script>
	// @ts-nocheck

	import { cacheArticleStore } from '$lib/store';

	export let article;
	const { slug, title, description, tags, coverImage } = article.fields;

	let trimmedDesc = description.length > 75 ? description.substring(0, 75) + '...' : description;

	function setCache() {
		cacheArticleStore.update((cache) => cache.set(slug, article));
		// console.log(slug, article, 'CACHE SET');
	}
</script>

<a href={`/articles/${slug}`} on:click={setCache}>
	<img src={coverImage.fields.file.url} alt="Preview" width="250" height="150" />
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
		margin: 0;
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
	@media screen and (max-width: 608px) {
		a {
			width: 90%;
			margin: 0 auto;
		}
	}
</style>
