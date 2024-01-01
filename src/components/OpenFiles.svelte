<script lang="ts">
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import pagesMap from '$lib/utils/pagesMap';
	import onSelectPage from '$lib/utils/onSelectPage';

	onMount(() => onSelectPage($page.url.pathname));

	onNavigate(({ to }) => onSelectPage(to?.url.pathname!));
</script>

<ul>
	{#each pagesMap as item, index (item.fileName)}
		<li>
			<a
				href={item.route}
				id={item.route}
				class={`${index === 0 && 'active'} page-list`}
				on:click={() => onSelectPage(item.route)}
			>
				<img src={item.icon} alt={item.fileName} />
				<span>{item.fileName}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow-x: hidden;
	}
	li > a {
		padding: 0.6rem 1rem;
		font-size: 0.8rem;
		user-select: none;
		display: flex;
		align-items: center;
		gap: 0.3rem;
		border-top: 1px solid transparent;
		border-right: 1px solid var(--dark);
	}
	li:first-child > a {
		border-left: 1px solid var(--dark);
	}
	li > a:hover {
		cursor: pointer;
	}
	/* li > a:active, */
	.active {
		background-color: var(--dark);
		border-top: 1px solid var(--contrast);
	}
	img {
		width: 1rem;
		height: 1rem;
	}
	@media screen and (max-width: 480px) {
		ul {
			overflow-x: auto;
		}
	}
</style>
