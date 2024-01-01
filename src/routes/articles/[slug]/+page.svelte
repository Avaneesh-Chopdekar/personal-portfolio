<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import formatDate from '$lib/utils/formatDate';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	export let data;
	const createdAt = new Date(data.article?.fields.createdAt);
	onMount(() => {
		let content = documentToHtmlString(data.article?.fields.content);
		console.log(content);
		if (browser) {
			let contentSection = document.getElementById('content-section');
			if (contentSection) {
				contentSection.innerHTML = content;
			}
		}
	});
</script>

<svelte:head>
	<title>{data.article?.fields.title} | Avaneesh</title>
</svelte:head>

<main class="themes">
	<h2 class="heading">{data.article?.fields.title}</h2>
	<hr class="heading-divider" />
	<span>{formatDate(createdAt)}</span>
	<p class="description">{data.article?.fields.description}</p>
	<section class="content" id="content-section"></section>
	<a class="go-back" href="/articles">Read other articles</a>
</main>

<style>
	main {
		height: 100%;
		background-color: var(--dark);
		padding: 1rem;
		font-size: 1.1rem;
		overflow: auto;
	}
	.heading {
		font-size: 2.25rem;
	}
	.heading-divider {
		margin: 0.5rem 0;
	}
	.description {
		margin: 1rem 0;
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.go-back {
		background-color: var(--darker);
		border: 1px solid var(--contrast);
		padding: 0.25rem 0.75rem;
		border-radius: 0.25rem;
		display: inline-block;
		margin: 1.5rem 0;
	}
	@media screen and (max-width: 600px) {
		.heading {
			font-size: 1.75rem;
		}
	}
</style>
