<script>
	// @ts-nocheck
	import Card from '../../components/Card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Articles | Avaneesh</title>
</svelte:head>

<main class="articles">
	<input type="search" name="search" id="search" placeholder="Search..." />
	<ul>
		{#each data.articles as article (article.sys.id)}
			<Card
				title={article.fields.title}
				description={article.fields.description}
				imgSrc={article.fields.coverImage.fields.file.url}
				tags={article.fields.tags}
			/>
		{/each}
		<Card
			title="Example Article: The Greatest One"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
			imgSrc="https://picsum.photos/150/250"
			tags={['tag1', 'tag2', 'tag3']}
		/>
		<Card
			title="Example Article: The Greatest One"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
			imgSrc="https://picsum.photos/150/250"
			tags={['tag1', 'tag2', 'tag3']}
		/>
		<Card
			title="Example Article: The Greatest One"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
			imgSrc="https://picsum.photos/150/250"
			tags={['tag1', 'tag2', 'tag3']}
		/>
		<Card
			title="Example Article: The Greatest One"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
			imgSrc="https://picsum.photos/150/250"
			tags={['tag1', 'tag2', 'tag3']}
		/>
		<Card
			title="Example Article: The Greatest One"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
			imgSrc="https://picsum.photos/150/250"
			tags={['tag1', 'tag2', 'tag3']}
		/>
		<Card
			title="Example Article: The Greatest One"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
			imgSrc="https://picsum.photos/150/250"
			tags={['tag1', 'tag2', 'tag3']}
		/>
		<Card
			title="Example Article: The Greatest One"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
			imgSrc="https://picsum.photos/150/250"
			tags={['tag1', 'tag2', 'tag3']}
		/>
	</ul>
</main>

<style>
	main {
		height: 100%;
		background-color: var(--dark);
		overflow: auto;
	}
	input {
		border: 1px solid transparent;
		background-color: var(--accent);
		color: white;
		min-width: 50%;
		margin: 1rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 0.25rem;
	}
	input::placeholder {
		color: #ccc;
	}
	input:active,
	input:focus {
		outline: 1px solid dodgerblue;
	}
	ul {
		margin: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
	@media screen and (max-width: 768px) {
		input {
			width: 75%;
			display: block;
			margin: 1rem auto;
		}
		ul {
			justify-content: center;
		}
	}
</style>
