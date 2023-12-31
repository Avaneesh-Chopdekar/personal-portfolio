<script>
	// @ts-nocheck
	import Card from '../../components/Card.svelte';
	export let data;
	let searchText = '';
	$: filteredArticles = data.articles.filter((article) => {
		if (searchText === '') {
			return article;
		} else if (
			article.fields.title.toString().toLowerCase().includes(searchText.toLowerCase()) ||
			article.fields.description.toString().toLowerCase().includes(searchText.toLowerCase())
		) {
			return article;
		}
	});
</script>

<svelte:head>
	<title>Articles | Avaneesh</title>
</svelte:head>

<main class="articles">
	<input bind:value={searchText} type="search" name="search" id="search" placeholder="Search..." />
	<ul>
		{#each filteredArticles as article (article.sys.id)}
			<Card
				title={article.fields.title}
				description={article.fields.description}
				imgSrc={article.fields.coverImage.fields.file.url}
				tags={article.fields.tags}
				slug={article.fields.slug}
			/>
		{/each}
	</ul>
</main>

<style>
	main {
		height: 100%;
		background-color: var(--dark);
		overflow: auto;
	}
	input {
		border: 1px solid transparent;
		background-color: var(--accent);
		color: white;
		min-width: 50%;
		margin: 1rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 0.25rem;
	}
	input::placeholder {
		color: #ccc;
	}
	input:active,
	input:focus {
		outline: 1px solid dodgerblue;
	}
	ul {
		margin: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
	@media screen and (max-width: 768px) {
		input {
			width: 75%;
			display: block;
			margin: 1rem auto;
		}
		ul {
			justify-content: center;
		}
	}
</style>
