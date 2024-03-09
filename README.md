# DOM-Generator

domGenerator allows you to generate HTML elements and organize them into a hierarchical structure according to a set of specifications.

# Usage

## Install package

```
npm i dom-generator
```

## Import domGenerator

```
import domGenerator from "dom-generator";
```

## Use domGenerator to generate a DOM structure

```
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

`tag`: HTMLElement or name of an element to be created.

`attributes`: Object of attributes to be applied to the element (`element.setAttribute(key, value)`).

`properties`: Object of properties to be applied to the element (`element[key] = value`).

`eventListeners`: Object of eventListeners to be applied to the element (`element.addEventListener(key, value)`).

`children`: Array of objects (or a single object) containing `tag`, `attributes`, `properties`, `eventListeners`, and `children`.
