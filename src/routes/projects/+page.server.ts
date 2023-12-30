import client from '../../cms';

export async function load() {
	const data = await client.getEntries();
	// console.log(data.items);

	return {
		projects: data.items.filter((project) => project.fields.githubLink !== undefined)
	};
}
