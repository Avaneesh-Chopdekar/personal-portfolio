<script>
	import reactIcon from '$lib/images/ext-icons/react_icon.svg';
	import htmlIcon from '$lib/images/ext-icons/html_icon.svg';
	import tsIcon from '$lib/images/ext-icons/ts_icon.svg';
	import jsonIcon from '$lib/images/ext-icons/json_icon.svg';
	import markdownIcon from '$lib/images/ext-icons/markdown_icon.svg';
	import cssIcon from '$lib/images/ext-icons/css_icon.svg';
</script>

<div class="explorer">
	<p class="title">EXPLORER</p>
	<details open>
		<summary>PORTFOLIO</summary>
		<ul>
			<li>
				<a href="/">
					<img src={reactIcon} alt="" />
					<span>index.jsx</span>
				</a>
			</li>
			<li>
				<a href="/about">
					<img src={htmlIcon} alt="" />
					<span>about.html</span></a
				>
			</li>
			<li>
				<a href="/projects">
					<img src={tsIcon} alt="" />
					<span>projects.ts</span>
				</a>
			</li>
			<li>
				<a href="/contact">
					<img src={jsonIcon} alt="" />
					<span>contact.json</span>
				</a>
			</li>
			<li>
				<a href="/articles">
					<img src={markdownIcon} alt="" />
					<span>articles.md</span>
				</a>
			</li>
			<li>
				<a href="/themes">
					<img src={cssIcon} alt="" />
					<span>themes.css</span>
				</a>
			</li>
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
