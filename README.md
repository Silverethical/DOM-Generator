# DOM-Generator

`dom-generator` is a versatile utility that simplifies the dynamic creation of HTML elements and the organization of a document's structure based on user-defined specifications. With a focus on ease of use and flexibility, this package allows you to effortlessly generate and manipulate HTML elements, making it a powerful tool for building dynamic and interactive web applications.

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
- **`attributes`**: Object of attributes to be applied to the element (`element.setAttribute(key, value)`).
- **`dataAttributes`**: Object of data attributes to be applied to the element (`element.dataset[key] = value`).
- **`properties`**: Object of properties to be applied to the element (`element[key] = value`).
- **`eventListeners`**: Object of eventListeners to be applied to the element (`element.addEventListener(key, value)`).
- **`children`**: Array of objects (or a single object) containing `tag`, `attributes`, `properties`, `eventListeners`, and `children`.
