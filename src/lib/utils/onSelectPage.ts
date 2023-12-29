export default function onSelectPage(pathname: string) {
	document.querySelectorAll<HTMLAnchorElement>('a.page-list').forEach((element) => {
		element.id == pathname ? element.classList.add('active') : element.classList.remove('active');
	});
}
