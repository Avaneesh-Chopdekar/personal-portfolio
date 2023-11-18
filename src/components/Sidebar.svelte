<script>
	import fileIcon from '$lib/images/vsc-icons/files.svg';
	import codeIcon from '$lib/images/vsc-icons/code.svg';
	import editIcon from '$lib/images/vsc-icons/edit.svg';
	import mailIcon from '$lib/images/vsc-icons/mail.svg';
	import accountIcon from '$lib/images/vsc-icons/account.svg';
	import settingsIcon from '$lib/images/vsc-icons/settings-gear.svg';
</script>

<aside class="sidebar">
	<div class="up">
		<a href="/"><img src={fileIcon} alt="" /></a>
		<a href="/projects"><img src={codeIcon} alt="" /></a>
		<a href="/articles"><img src={editIcon} alt="" /></a>
		<a href="/contact"><img src={mailIcon} alt="" /></a>
	</div>
	<div class="down">
		<a href="/about"><img src={accountIcon} alt="" /></a>
		<a href="/themes"><img src={settingsIcon} alt="" /></a>
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
	/* TODO: Add This On Selected Page   */
	a:active {
		border-left: 2px solid white;
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
