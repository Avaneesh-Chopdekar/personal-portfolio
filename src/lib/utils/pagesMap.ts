import type { FileListItem } from './types';
import reactIcon from '$lib/images/ext-icons/react_icon.svg';
import htmlIcon from '$lib/images/ext-icons/html_icon.svg';
import tsIcon from '$lib/images/ext-icons/ts_icon.svg';
import jsonIcon from '$lib/images/ext-icons/json_icon.svg';

const pagesMap: FileListItem[] = [
	{ fileName: 'index.jsx', route: '/', icon: reactIcon },
	{ fileName: 'about.html', route: '/about', icon: htmlIcon },
	{ fileName: 'projects.ts', route: '/projects', icon: tsIcon },
	{ fileName: 'articles.json', route: '/articles', icon: jsonIcon }
];

export default pagesMap;
