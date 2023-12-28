import React from "react";

function TextElement({ el, index }) {
	return el.tag === "h1" ? (
		<h1 className="text-2xl font-bold font-mono" key={index}>
			{el.content}
		</h1>
	) : (
		<p className="font-mono" key={index}>
			{el.content}
		</p>
	);
}

export default TextElement;
