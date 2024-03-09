import "./style.css";
import { setupCounter } from "./counter.ts";
import { ElementConfigType } from "../types";
import domGenerator from "../main.ts";

const counterButton = domGenerator({
	tag: "button",
	attributes: { id: "counter", type: "button" },
});

setupCounter(counterButton as HTMLButtonElement);

const counterSectionConfig: ElementConfigType = {
	tag: "section",
	children: [
		{
			tag: "h1",
			properties: { textContent: "DOM-Generator" },
		},
		{
			tag: "div",
			attributes: { class: "card" },
			children: { tag: counterButton },
		},
	],
};

const app = document.querySelector<HTMLDivElement>("#app")!;

app.append(domGenerator(counterSectionConfig));
