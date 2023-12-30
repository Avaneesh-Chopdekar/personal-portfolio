import client from '../../cms';

export async function load() {
	const data = await client.getEntries({ content_type: 'project' });
	// console.log(data.items);

	return {
		projects: data.items
	};
}
