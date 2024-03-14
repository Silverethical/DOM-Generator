# DOM-Generator

`domGenerator` is a versatile utility that simplifies the dynamic creation of HTML elements and the organization of a document's structure based on user-defined specifications. With a focus on ease of use and flexibility, this package allows you to effortlessly generate and manipulate HTML elements, making it a powerful tool for building dynamic and interactive web applications.

## Features

- **Intuitive API:** Create HTML elements with ease using a straightforward and intuitive API.
- **Hierarchy Building:** Organize elements into a hierarchical structure using a simple and declarative syntax.
- **Event Handling:** Easily attach event listeners to elements, enhancing interactivity in your web applications.

# Usage

## Install

```bash
npm i dom-generator
```

## Import

```js
import domGenerator from "dom-generator";
```

## Innovate

```js
domGenerator({
  tag: "section",
  attributes: { class: "card" },
  children: [
    {
      tag: "button",
      properties: { textContent: "DOM-Generator" },
      eventListeners: { click: () => console.log("Hi!") },
    },
  ],
});
```

# Config

- **`tag`**: HTMLElement or name of an element to be created.
- **`attributes`**: Object containing attributes to be applied to the element. `domGenerator` uses `element.setAttribute(key, value)` to set these attributes. Example: `{ class: "card", id: "my-element" }`.
- **`dataAttributes`**: Object containing data attributes to be applied to the element. Data attributes allow you to store custom data associated with an element. `domGenerator` uses `element.dataset[key] = value` to set data attributes. Example: `{ userId: "123", userName: "john_doe" }`.
- **`properties`**: Object containing properties to be applied to the element. `domGenerator` uses `element[key] = value` to set these properties. Example: `{ textContent: "Hello World" }`.
- **`eventListeners`**: Object containing event listeners to be applied to the element. `domGenerator` uses `element.addEventListener(key, value)` to attach event listeners. Example: `{ click: () => console.log("Clicked!") }`.
- **`children`**: Array of objects (or a single object) containing all the above. This allows for nesting elements within each other to build complex structures.
