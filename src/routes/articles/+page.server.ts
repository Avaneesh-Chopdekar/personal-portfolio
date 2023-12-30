import client from '../../cms';

export async function load() {
	const data = await client.getEntries({ content_type: 'articles' });
	// console.log(data.items);

	return {
		articles: data.items
	};
}
