import React, { useRef, useState } from "react";
import Header from "./Header";
import TextElement from "./TextElement";
import InputForm from "./InputForm";

function Section({ sideBarOpen }) {
	const [block, setBlock] = useState("p");
	const [showBlockPopup, setShowBlockPopup] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [data, setData] = useState([]);
	const inputRef = useRef(null);

	const handleInputChange = (e) => {
		const value = e.target.value;
		// Check if the input starts with "/"
		if (value.startsWith("/1")) {
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

		// Focus on the existing input element
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			if (inputValue !== "") {
				const newInput = {
					tag: block,
					content: inputValue,
				};

				setData((prevData) => [...prevData, newInput]);
				setInputValue("");
				setBlock("p");
			}
		}
	};
	const props = {
		inputRef,
		block,
		handleInputChange,
		handleKeyPress,
		inputValue,
		handleSelectBlock,
		showBlockPopup,
	};
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
						<TextElement el={el} index={index} key={index} />
					))}
				</div>

				<InputForm props={props} />
			</main>
		</section>
	);
}

export default Section;
