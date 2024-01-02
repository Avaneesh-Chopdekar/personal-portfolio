import client from '../../cms';

const cache = new Map();

export async function load() {
	if (cache.has('articles')) {
		// console.log('articles CACHE HIT');
		return { articles: cache.get('articles') };
	}

	// console.log('articles CACHE MISS');
	const data = await client.getEntries({ content_type: 'articles' });
	cache.set('articles', data.items);
	// console.log(data.items);

	return {
		articles: data.items
	};
}
