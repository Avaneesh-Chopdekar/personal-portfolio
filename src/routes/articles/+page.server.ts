import client from '../../cms';

export async function load() {
	const data = await client.getEntries();
	// console.log(data.items[0]);

	return {
		articles: data.items
	};
}
