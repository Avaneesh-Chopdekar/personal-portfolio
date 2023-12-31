import client from '../../../cms';

export async function load({ params }) {
	const data = await client.getEntries({ content_type: 'articles' });
	const item = data.items.find((item) => params.slug === item.fields.slug);
	// console.log(item);

	return {
		article: item
	};
}
