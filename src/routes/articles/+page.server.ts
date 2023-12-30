import client from '../../cms';

export async function load() {
	const data = await client.getEntries();
	// console.log(data.items);

	return {
		articles: data.items.filter((article) => article.fields.slug !== undefined)
	};
}
