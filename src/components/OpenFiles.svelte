<script>
	import reactIcon from '$lib/images/ext-icons/react_icon.svg';
	import htmlIcon from '$lib/images/ext-icons/html_icon.svg';
	import tsIcon from '$lib/images/ext-icons/ts_icon.svg';
	import jsonIcon from '$lib/images/ext-icons/json_icon.svg';
	import markdownIcon from '$lib/images/ext-icons/markdown_icon.svg';
	import cssIcon from '$lib/images/ext-icons/css_icon.svg';
</script>

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

<style>
	ul {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow-x: auto;
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
	ul:first-child > a {
		border-left: 1px solid var(--dark);
	}
	li > a:hover {
		cursor: pointer;
	}
	li > a:active {
		background-color: var(--dark);
		border-top: 1px solid dodgerblue;
	}
	img {
		width: 1rem;
		height: 1rem;
	}
</style>
