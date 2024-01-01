// import client from '../../../cms';
import {
	CONTENTFUL_SPACE_ID as SPACE_ID,
	CONTENTFUL_ACCESS_TOKEN as TOKEN
} from '$env/static/private';

export async function load({ params }) {
	// const data = await client.getEntry('');
	// const data = await client.getEntries({ content_type: 'articles', 'fields.slug[in]': params.slug });
	// const item = data.items.find((item) => params.slug === item.fields.slug);
	const res = await fetch(
		`https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${TOKEN}&content_type=articles&fields.slug=${params.slug}`
	);
	const data = await res.json();
	// console.log(data.items[0]);

	return {
		article: data.items[0]
	};
}
