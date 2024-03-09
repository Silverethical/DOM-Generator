import createElement from "./helpers/createElement";
import { ElementConfigType } from "./types";

/**
 * domGenerator function creates a DOM structure based on the provided configuration.
 *
 * @param {ElementConfigType} config - The configuration object defining the parent and children elements.
 * @returns {HTMLElement} - The parent HTML element with the generated DOM structure.
 */
const domGenerator = ({
	children,
	...config
}: ElementConfigType): HTMLElement => {
	// Create the parent element using the provided configuration.
	const parentElement = createElement(config);

	// Check if children are provided and if it's an array.
	if (children instanceof Object) {
		// If children is not an array, convert it to a single-element array.
		if (!Array.isArray(children)) {
			children = [children];
		}

		// Iterate through each child configuration.
		for (const childConfig of children) {
			// Generate the child element recursively using the child configuration.
			const childElement = domGenerator(childConfig);

			// Append the child element to the parent element.
			parentElement.append(childElement);
		}
	}

	// Return the parent HTML element with the generated DOM structure.
	return parentElement;
};

export default domGenerator;
