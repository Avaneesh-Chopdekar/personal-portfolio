import {
	CONTENTFUL_SPACE_ID as SPACE_ID,
	CONTENTFUL_ACCESS_TOKEN as TOKEN
} from '$env/static/private';
import { cacheArticleStore } from '$lib/store';

export async function load({ params }) {
	cacheArticleStore.subscribe((cache) => {
		if (cache.has(params.slug)) {
			// console.log(params.slug, 'CACHE HIT');
			return { article: cache.get(params.slug) };
		}
	});

	async function fetchArticle() {
		// console.log(params.slug, 'CACHE MISS');
		const res = await fetch(
			`https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${TOKEN}&content_type=articles&fields.slug=${params.slug}`
		);
		const data = await res.json();
		// console.log(data.items[0]);
		cacheArticleStore.update((cache) => cache.set(params.slug, data.items[0]));
		return data.items[0];
	}

	return {
		article: fetchArticle()
	};
}
