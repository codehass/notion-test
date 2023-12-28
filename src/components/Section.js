import React, { useState } from "react";
import Header from "./Header";
import { RxText } from "react-icons/rx";

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
		} else {
			setBlock("p");
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
				<form className="relative">
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
					{showBlockPopup && <BlockPopup onSelectBlock={handleSelectBlock} />}
				</form>
			</main>
		</section>
	);
}

export default Section;

const BlockPopup = ({ onSelectBlock }) => {
	const blocks = ["Heading 1", "Text"];

	return (
		<div className="absolute top-12 left-0 bg-white border border-gray-300 space-y-2 shadow-md rounded-md py-3">
			<div className="px-3">
				<h2 className="font-bold">Add blocks</h2>
				<p className="text-gray-400">
					Keep typing to filter, or escape to exit
				</p>
			</div>
			<div className="flex items-center gap-1 px-3">
				<p className="text-gray-600">Filtering keywords: </p>{" "}
				<span className="bg-blue-600 p-1 text-sm rounded-sm text-white">
					{blocks.length}
				</span>
			</div>
			{blocks.map((tag, index) => (
				<div
					key={index}
					className="cursor-pointer hover:bg-gray-100 p-2 px-3 flex items-center gap-1"
					onClick={() => onSelectBlock(tag)}
				>
					<RxText className="text-5xl text-gray-400" />
					<div className="flex flex-col">
						<p className="font-bold">{tag}</p>
						<span className="text-sm text-gray-400">
							Shortcut: type # + space
						</span>
					</div>
				</div>
			))}
		</div>
	);
};
