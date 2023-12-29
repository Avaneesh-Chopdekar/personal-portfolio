<script lang="ts">
	import { page } from '$app/stores';
	import fileIcon from '$lib/images/vsc-icons/files.svg';
	import codeIcon from '$lib/images/vsc-icons/code.svg';
	import editIcon from '$lib/images/vsc-icons/edit.svg';
	import githubIcon from '$lib/images/vsc-icons/github-inverted.svg';
	import accountIcon from '$lib/images/vsc-icons/account.svg';
	import settingsIcon from '$lib/images/vsc-icons/settings-gear.svg';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import onSelectPage from '$lib/utils/onSelectPage';

	onMount(() => onSelectPage($page.url.pathname));

	onNavigate(({ to }) => onSelectPage(to?.url.pathname!));
</script>

<aside class="sidebar">
	<div class="up">
		<a class="page-list active" href="/" on:click={() => onSelectPage('/')} id="/">
			<img src={fileIcon} alt="" />
		</a>
		<a class="page-list" href="/projects" on:click={() => onSelectPage('/projects')} id="/projects">
			<img src={codeIcon} alt="" />
		</a>
		<a class="page-list" href="/articles" on:click={() => onSelectPage('/articles')} id="/articles">
			<img src={editIcon} alt="" />
		</a>
		<a href="https://github.com/Avaneesh-Chopdekar" target="_blank" rel="noopener noreferrer">
			<img src={githubIcon} alt="" />
		</a>
	</div>
	<div class="down">
		<a class="page-list" href="/about" on:click={() => onSelectPage('/about')} id="/about">
			<img src={accountIcon} alt="" />
		</a>
		<a class="page-list" href="/themes" on:click={() => onSelectPage('/themes')} id="/themes">
			<img src={settingsIcon} alt="" />
		</a>
	</div>
</aside>

<style>
	.sidebar {
		border-right: 1px solid var(--dark);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}
	.up {
		display: flex;
		flex-direction: column;
	}
	.down {
		display: flex;
		flex-direction: column;
	}
	a {
		height: calc(1.8rem * 0.7rem);
		width: calc(1.8rem * 0.7rem);
		padding: 0.7rem;
		border: 2px solid transparent;
		cursor: pointer;
	}
	img {
		object-fit: contain;
		height: 100%;
		width: 100%;
	}
	/* a:active, */
	.active {
		border-left: 2px solid dodgerblue;
	}
	a:hover {
		/* border: 2px solid gray; */
		background-color: black;
	}
	@media screen and (max-height: 400px) {
		a {
			padding: 0.3rem;
			height: calc(1.4rem * 0.3rem);
			width: calc(1.4rem * 0.3rem);
		}
	}
</style>
