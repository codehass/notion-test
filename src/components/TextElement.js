import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";

function TextElement({ el, index }) {
	return el.tag === "h1" ? (
		<div className="group flex items-center relative">
			<div className="hidden group-hover:block absolute left-[-15px]">
				<PiDotsSixVerticalBold className="text-gray-600 text-lg cursor-pointer" />
			</div>
			<h1 className="text-2xl font-bold font-mono pl-1" key={index}>
				{el.content}
			</h1>
		</div>
	) : (
		<div className="group flex items-center relative">
			<div className="hidden group-hover:block absolute left-[-15px]">
				<PiDotsSixVerticalBold className="text-gray-600 text-lg cursor-pointer" />
			</div>
			<p className="font-mono pl-1" key={index}>
				{el.content}
			</p>
		</div>
	);
}

export default TextElement;
