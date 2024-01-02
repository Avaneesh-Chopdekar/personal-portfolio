<script>
	// @ts-nocheck
	import ArticleCard from '../../components/ArticleCard.svelte';
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
			<ArticleCard {article} />
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
		outline: 1px solid var(--contrast);
	}
	input[type='search']::-webkit-search-cancel-button {
		-webkit-appearance: none;
		height: 1rem;
		width: 1rem;
		border-radius: 50em;
		background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
			no-repeat 50% 50%;
		background-size: contain;
		opacity: 0;
		pointer-events: none;
		filter: invert(1);
	}

	input[type='search']:focus::-webkit-search-cancel-button {
		opacity: 0.3;
		pointer-events: all;
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
	@media screen and (max-width: 608px) {
		input {
			width: calc(90% - 1.75rem);
			margin: 1rem auto;
		}
	}
</style>
