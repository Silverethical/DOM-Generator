import { ElementConfigType } from "../types";

/**
 * Function to create an HTML element based on the provided configuration.
 * @param {ElementConfigType} config - Configuration object for creating the element.
 * @returns {HTMLElement} - The created HTML element.
 */
const createElement = (config: ElementConfigType): HTMLElement => {
	// Destructure properties from the configuration object.
	const { tag, attributes, dataAttributes, properties, eventListeners } =
		config;

	// Check if the provided tag is already an HTML element.
	const isTagHtmlElement = tag instanceof HTMLElement;

	// Check if the provided tag is a string.
	const isTagString = typeof tag === "string";

	// If the provided tag is neither an HTML element nor a string, throw an error.
	if (!isTagHtmlElement && !isTagString) {
		throw new Error("Please provide a string tag or a DOM element");
	}

	// Create a new HTML element based on the tag provided.
	const newEl = isTagHtmlElement ? tag : document.createElement(tag);

	// Assign a shorthand variable for attributes and dataAttributes for aesthetic purposes.
	const [attrs, dAttrs] = [attributes, dataAttributes];

	// Set attributes on the new element.
	for (const name in attrs) (newEl as any).setAttribute(name, attrs[name]);

	// Set data attributes on the new element.
	for (const name in dAttrs) (newEl as any).dataset[name] = dAttrs[name];

	// Set properties on the new element.
	for (const name in properties) (newEl as any)[name] = properties[name];

	// Add event listeners to the new element.
	for (const name in eventListeners) {
		const handler = eventListeners[name];

		// Check if the handler is a function before adding the event listener.
		if (typeof handler !== "function") continue;

		newEl.addEventListener(name, handler);
	}

	// Return the created HTML element.
	return newEl;
};

export default createElement;
