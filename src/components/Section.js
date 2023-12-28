import React, { useState } from "react";
import Header from "./Header";

// const data = [];

function Section({ sideBarOpen }) {
	const [block, setBlock] = useState("p");
	const [showBlockPopup, setShowBlockPopup] = useState(false);

	const [inputValue, setInputValue] = useState("");

	const [data, setData] = useState([]);

	const handleInputChange = (e) => {
		const value = e.target.value;
		// Check if the input starts with "/"
		if (value.startsWith("/")) {
			setShowBlockPopup(true);
		} else {
			setShowBlockPopup(false);
		}
		setInputValue(value);
	};

	const handleSelectBlock = (tag) => {
		if (tag === "Heading 1") {
			setBlock("h1");
		}
		setInputValue("");
		setShowBlockPopup(false);
	};

	// function handleKeyPress(event) {
	// 	if (event.key === "Enter") {
	// 		event.preventDefault();
	// 		if (event.target.value) {
	// 			// Create an empty input and move to the next row
	// 			const parentElement = event.target.parentElement;
	// 			const newInput = document.createElement("input");
	// 			newInput.type = "text";
	// 			newInput.placeholder = "Type / for blocks, @ to link docs or people";
	// 			newInput.className = "w-11/12 focus:border-none outline-none";
	// 			newInput.onchange = handleInputChange;
	// 			newInput.onkeydown = handleKeyPress;
	// 			parentElement.appendChild(newInput);
	// 			newInput.focus();

	// 			// Remove the placeholder from the previous input
	// 			event.target.placeholder = "";
	// 		}
	// 	}
	// }

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			if (inputValue !== "") {
				setData((prevData) => [...prevData, inputValue]);
				setInputValue("");
				setBlock("p");
			}
		}
	};

	const handleSubmit = () => {
		setData((prevData) => [...prevData, inputValue]);
	};

	console.log(inputValue);
	console.log(data);

	return (
		<section
			className={`${
				sideBarOpen ? "w-4/5" : "w-[95%] mx-auto"
			} h-full flex flex-col gap-10`}
		>
			<Header />
			<main className="w-4/5 flex flex-col gap-1 item-center justify-center mx-auto">
				<div className="content flex flex-col gap-2 mb-2">
					{data.map((el, index) => (
						<h1 className="text-2xl font-bold font-mono" key={index}>
							{el}
						</h1>
					))}
				</div>
				<form>
					<input
						type="text"
						placeholder={`${
							block === "h1"
								? "Heading 1"
								: "Type / for blocks, @ to link docs or people"
						} `}
						className={`${
							block === "h1" ? "text-2xl font-bold font-mono" : ""
						} w-11/12 focus:border-none outline-none `}
						onChange={handleInputChange}
						onKeyDown={handleKeyPress}
						value={inputValue}
					/>
				</form>
				{showBlockPopup && <BlockPopup onSelectBlock={handleSelectBlock} />}
			</main>
		</section>
	);
}

export default Section;

const BlockPopup = ({ onSelectBlock }) => {
	const blocks = ["Heading 1", "Text"];

	return (
		<div className="absolute top-12 left-0 bg-white border border-gray-300 p-2 space-y-2 shadow-md">
			{blocks.map((tag, index) => (
				<div
					key={index}
					className="cursor-pointer hover:bg-gray-100 p-2"
					onClick={() => onSelectBlock(tag)}
				>
					{tag}
				</div>
			))}
		</div>
	);
};
