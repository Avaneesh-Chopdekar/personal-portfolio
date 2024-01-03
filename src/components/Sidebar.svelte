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
	import themesMap from '$lib/utils/themesMap';
	import { browser } from '$app/environment';

	onMount(() => {
		getTheme();
		onSelectPage($page.url.pathname);
	});

	onNavigate(({ to }) => onSelectPage(to?.url.pathname!));

	let changeThemeDialog: HTMLDialogElement;
	$: isDialogOpen = false;

	function toggleDialog() {
		if (isDialogOpen) {
			changeThemeDialog.close();
		} else {
			changeThemeDialog.show();
		}
		isDialogOpen = !isDialogOpen;
	}

	let colorThemes: NodeListOf<HTMLInputElement>;

	if (browser) {
		colorThemes = document.querySelectorAll('[name="theme"]');

		colorThemes.forEach((themeOption) => {
			themeOption.addEventListener('click', () => {
				saveTheme(themeOption.id);
			});
		});
	}

	function saveTheme(theme: string) {
		if (browser) {
			localStorage.setItem('avaneesh-portfolio-theme', theme);
		}
	}
	function getTheme() {
		const theme = localStorage.getItem('avaneesh-portfolio-theme');
		if (theme) {
			colorThemes.forEach((themeOption) => {
				if (themeOption.id === theme) {
					themeOption.checked = true;
				}
			});
		}
	}
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
		<button class="page-list theme-btn" on:click={toggleDialog}>
			<img src={settingsIcon} alt="" />
		</button>
	</div>
</aside>

<dialog bind:this={changeThemeDialog}>
	<p>Pick a theme</p>
	<ul>
		{#each themesMap as theme (theme.id)}
			<li class="theme-item">
				<input checked={theme.id === 'dark-modern'} type="radio" id={theme.id} name="theme" />
				<label for={theme.id}>{theme.value}</label>
			</li>
		{/each}
	</ul>
	<button
		class="theme-close-btn"
		on:click={() => {
			changeThemeDialog.close();
			isDialogOpen = false;
		}}
	>
		Close
	</button>
</dialog>

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
	.theme-btn {
		background-color: var(--darker);
	}
	a,
	.theme-btn,
	.theme-btn:active {
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
	.active:not(:last-child) {
		border-left: 2px solid var(--contrast);
	}
	a:focus,
	a:hover,
	.theme-btn:hover,
	.theme-btn:focus {
		/* border: 2px solid gray; */
		background-color: var(--dark);
		outline: none;
	}
	dialog {
		position: absolute;
		left: 3.2rem;
		bottom: 2.2rem;
		padding: 1rem;
		border: 1px solid white;
		border-radius: 0.25rem;
		z-index: 2;
		background-color: var(--dark);
		color: white;
	}
	ul {
		padding-top: 0.5rem;
	}
	.theme-item {
		padding: 0.5rem;
	}
	input[type='radio'] {
		accent-color: var(--contrast);
	}
	li {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	li > label {
		cursor: pointer;
	}
	.theme-close-btn {
		margin-top: 0.5rem;
		padding: 0.25rem 0.5rem;
		background-color: var(--accent);
		color: white;
		border: 1px solid white;
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.theme-close-btn:focus {
		outline: 1px solid var(--contrast);
		background-color: var(--darker);
	}
	:root:has(#dark-modern:checked) {
		--darker: #161616;
		--dark: #252525;
		--accent: #3d3d3d;
		--contrast: dodgerblue;
	}
	:root:has(#shades-of-purple:checked) {
		--darker: #281b56;
		--dark: #3f3179;
		--accent: #54409a;
		--contrast: #fff200;
	}
	:root:has(#cobalt2-theme:checked) {
		--darker: #0e3344;
		--dark: #124e69;
		--accent: #176082;
		--contrast: #ffd000;
	}
	@media screen and (max-height: 400px) {
		a,
		.theme-btn {
			padding: 0.3rem;
			height: calc(1.4rem * 0.3rem);
			width: calc(1.4rem * 0.3rem);
		}
	}
</style>
