<script>
	import gitIcon from '$lib/images/vsc-icons/git-merge.svg';
	import errorIcon from '$lib/images/vsc-icons/error.svg';
	import warningIcon from '$lib/images/vsc-icons/warning.svg';
	import svelteIcon from '$lib/images/ext-icons/svelte-icon.svg';
	import bellIcon from '$lib/images/vsc-icons/bell.svg';
</script>

<footer class="footer">
	<div class="git-master">
		<img src={gitIcon} alt="" />
		<a
			href="https://github.com/Avaneesh-Chopdekar/personal-portfolio"
			target="_blank"
			rel="noopener noreferrer"
		>
			master
		</a>
	</div>
	<div class="issues">
		<div class="errors">
			<img src={errorIcon} alt="" />
			<span>0</span>
		</div>
		<div class="warnings">
			<img src={warningIcon} alt="" />
			<span>0</span>
		</div>
	</div>
	<div class="spacer"></div>
	<div class="powered-by-sveltekit">
		<img src={svelteIcon} alt="" />
		<span>Powered by Svelte</span>
	</div>
	<img class="bell-icon" src={bellIcon} alt="" />
</footer>

<style>
	.footer img {
		width: 1rem;
		height: 1rem;
	}
	.footer {
		border-top: 1px solid var(--dark);
		padding: 0 0.5rem;
		font-size: 0.8rem;
		position: absolute;
		width: 100%;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.footer div {
		padding: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
	}
	.footer div:hover,
	.footer .bell-icon:hover {
		cursor: pointer;
	}
	.footer div.spacer {
		flex: 2;
		cursor: default;
	}
	.issues {
		margin-left: 0.75rem;
	}
	.powered-by-sveltekit {
		margin-right: 0.75rem;
	}
</style>
