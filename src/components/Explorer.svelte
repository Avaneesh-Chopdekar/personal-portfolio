<script lang="ts">
	import pagesMap from '$lib/utils/pagesMap';
</script>

<div class="explorer">
	<p class="title">EXPLORER</p>
	<details open>
		<summary>PORTFOLIO</summary>
		<ul>
			{#each pagesMap as item (item.fileName)}
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
