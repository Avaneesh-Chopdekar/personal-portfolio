<script lang="ts">
	import reactIcon from '$lib/images/ext-icons/react_icon.svg';
	import htmlIcon from '$lib/images/ext-icons/html_icon.svg';
	import tsIcon from '$lib/images/ext-icons/ts_icon.svg';
	// import jsonIcon from '$lib/images/ext-icons/json_icon.svg';
	import markdownIcon from '$lib/images/ext-icons/markdown_icon.svg';
	import cssIcon from '$lib/images/ext-icons/css_icon.svg';
	import type { FileListItem } from '$lib/utils/types';

	const explorerItems: FileListItem[] = [
		{ fileName: 'index.jsx', route: '/', icon: reactIcon },
		{ fileName: 'about.html', route: '/about', icon: htmlIcon },
		{ fileName: 'projects.ts', route: '/projects', icon: tsIcon },
		// { fileName: 'contact.json', route: '/contact', icon: jsonIcon },
		{ fileName: 'articles.md', route: '/articles', icon: markdownIcon },
		{ fileName: 'themes.css', route: '/themes', icon: cssIcon }
	];
</script>

<div class="explorer">
	<p class="title">EXPLORER</p>
	<details open>
		<summary>PORTFOLIO</summary>
		<ul>
			{#each explorerItems as item (item.fileName)}
				<li>
					<a href={item.route}>
						<img src={item.icon} alt={item.fileName} />
						<span>{item.fileName}</span>
					</a>
				</li>
			{/each}
		</ul>
	</details>
</div>

<style>
	.explorer {
		width: 16ch;
	}
	.title {
		padding-left: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 1rem;
		font-size: 0.7rem;
	}
	summary {
		font-size: 0.8rem;
		font-weight: bold;
		padding-left: 0.5rem;
		margin-bottom: 0.5rem;
		cursor: pointer;
		user-select: none;
	}
	li > a {
		padding: 0.25rem 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		cursor: pointer;
		user-select: none;
	}
	li:hover {
		background-color: var(--dark);
	}
	span {
		font-size: 0.85rem;
	}
	img {
		width: 1rem;
		height: 1rem;
	}
	/* details[open] summary ~ * {
      animation: sweep 0.5s ease-in-out;
      transform-origin: 100% 0%;
    }
  
    @keyframes sweep {
      0% {
        transform: scaleY(0);
      }
      100% {
        transform: scaleY(1);
      }
    } */

	@media screen and (max-width: 768px) {
		.explorer {
			display: none;
		}
	}
</style>
