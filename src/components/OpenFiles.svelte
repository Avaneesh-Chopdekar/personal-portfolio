<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { browser } from '$app/environment';
	import reactIcon from '$lib/images/ext-icons/react_icon.svg';
	import htmlIcon from '$lib/images/ext-icons/html_icon.svg';
	import tsIcon from '$lib/images/ext-icons/ts_icon.svg';
	import markdownIcon from '$lib/images/ext-icons/markdown_icon.svg';
	import cssIcon from '$lib/images/ext-icons/css_icon.svg';
	import type { FileListItem } from '$lib/utils/types';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	const explorerItems: FileListItem[] = [
		{ fileName: 'index.jsx', route: '/', icon: reactIcon },
		{ fileName: 'about.html', route: '/about', icon: htmlIcon },
		{ fileName: 'projects.ts', route: '/projects', icon: tsIcon },
		{ fileName: 'articles.md', route: '/articles', icon: markdownIcon },
		{ fileName: 'themes.css', route: '/themes', icon: cssIcon }
	];

	function onSelectFile(pathname: string) {
		document.querySelectorAll<HTMLAnchorElement>('a.file-list').forEach((element) => {
			element.id == pathname ? element.classList.add('active') : element.classList.remove('active');
		});
	}

	onMount(() => onSelectFile($page.url.pathname));

	onNavigate(({ to }) => onSelectFile(to?.url.pathname!));
</script>

<ul>
	{#each explorerItems as item, index (item.fileName)}
		<li>
			<a
				href={item.route}
				id={item.route}
				class={`${index === 0 && 'active'} file-list`}
				on:click={() => onSelectFile(item.route)}
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
	ul:first-child a {
		border-left: 1px solid var(--dark);
	}
	li > a:hover {
		cursor: pointer;
	}
	/* li > a:active, */
	.active {
		background-color: var(--dark);
		border-top: 1px solid dodgerblue;
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
