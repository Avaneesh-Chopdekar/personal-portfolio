import client from '../../cms';

const cache = new Map();

export async function load() {
	if (cache.has('projects')) {
		// console.log('projects CACHE HIT');
		return { projects: cache.get('projects') };
	}

	// console.log('projects CACHE MISS');
	const data = await client.getEntries({ content_type: 'project' });
	cache.set('projects', data.items);
	// console.log(data.items);

	return {
		projects: data.items
	};
}
