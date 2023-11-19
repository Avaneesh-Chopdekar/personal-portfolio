<script>
	import vscodeIcon from '$lib/images/vsc-icons/vscode_icon.svg';
	const navItems = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];
</script>

<header>
	<nav class="navbar">
		<div class="left">
			<img src={vscodeIcon} width="16" height="16" alt="VScode" />
			<ul>
				{#each navItems as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
		<h1 class="middle">Avaneesh - Visual Studio Code</h1>
		<div class="right">
			<span class="green"></span>
			<span class="yellow"></span>
			<span class="red"></span>
		</div>
	</nav>
</header>

<style>
	.navbar {
		border-bottom: 1px solid var(--dark);
		width: 100%;
		padding: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.navbar div {
		display: flex;
		align-items: center;
	}
	.navbar ul {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		margin-left: 0.75rem;
		font-size: 0.8rem;
	}
	.navbar ul li {
		cursor: pointer;
	}
	.middle {
		z-index: -1;
		user-select: none;
		font-size: 0.8rem;
		text-align: center;
		position: absolute;
		left: 0;
		right: 0;
		font-weight: normal;
	}
	.right span {
		height: 14px;
		width: 14px;
		border-radius: 50%;
		margin: 0 0.25rem;
		cursor: pointer;
	}
	.right .red {
		background-color: #db4b4b;
	}
	.right .yellow {
		background-color: khaki;
	}
	.right .green {
		background-color: limegreen;
	}
	@media screen and (max-width: 800px) {
		.navbar ul {
			display: none;
		}
	}
</style>
