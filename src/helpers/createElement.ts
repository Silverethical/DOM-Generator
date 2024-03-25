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

	// Check if 'attributes' is an object and set attributes on the new element.
	if (attributes instanceof Object) {
		for (const name in attributes) {
			(newEl as any).setAttribute(name, attributes[name]);
		}
	} else if (attributes) {
		console.warn("Skipping 'attributes' since it is not an object.");
	}

	// Check if 'dataAttributes' is an object and set data attributes on the new element.
	if (dataAttributes instanceof Object) {
		for (const name in dataAttributes) {
			(newEl as any).dataset[name] = dataAttributes[name];
		}
	} else if (dataAttributes) {
		console.warn("Skipping 'dataAttributes' since it is not an object.");
	}

	// Check if 'properties' is an object and set properties on the new element.
	if (properties instanceof Object) {
		for (const name in properties) (newEl as any)[name] = properties[name];
	} else if (properties) {
		console.warn("Skipping 'properties' since it is not an object.");
	}

	// Check if 'eventListeners' is an object and add event listeners to the new element.
	if (eventListeners instanceof Object) {
		for (const name in eventListeners) {
			const handler = eventListeners[name];

			// Check if the handler is a function before adding the event listener.
			if (typeof handler !== "function") {
				console.warn(
					`Skipping '${name}' handler, since it is not a function.`
				);
				continue;
			}

			newEl.addEventListener(name, handler);
		}
	} else if (eventListeners) {
		console.warn("Skipping 'eventListeners' since it is not an object.");
	}

	// Return the created HTML element.
	return newEl;
};

export default createElement;
