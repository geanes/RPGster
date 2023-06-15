export const convertHexColor = (hexColor: string) => {
	hexColor = hexColor.replace(/^#/, '');
	hexColor = hexColor.toLowerCase();
	return hexColor === '000000' ? 'transparent' : hexColor;
};

export const toCamelCase = (str: string): string => {
	const words = str.trim().split(/\s+/);
	const firstWord = words.shift()?.toLowerCase() ?? '';
	const restOfWords = words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join('');
	return `${firstWord}${restOfWords}`;
};

export const toTitleCase = (str: string): string => {
	str = str.replace(/_/g, ' ');
	const words = str.split(/(?=[A-Z])/);
	const firstWord = words[0][0].toUpperCase() + words[0].slice(1);
	const restOfWords = words.slice(1).join(' ');
	return `${firstWord} ${restOfWords}`;
};

export const inList = (list: any[], id: string): { in: boolean; qty: number } => {
	const listIds = list.map((i) => i.id);
	const qty = listIds.filter((i) => i === id).length;
	return { in: listIds.includes(id), qty: qty };
};
