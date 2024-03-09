export default interface ElementConfigType {
	tag: HTMLElement | string;
	attributes?: { [key: string]: string | number | boolean };
	properties?: { [key: string]: string | number | boolean };
	eventListeners?: { [key: string]: (event: Event) => any };
	children?: ElementConfigType | ElementConfigType[];
}
