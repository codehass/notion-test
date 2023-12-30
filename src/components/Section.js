import React, { useRef, useState } from "react";
import Header from "./Header";
import TextElement from "./TextElement";
import InputForm from "./InputForm";
import BarHeader from "./BarHeader";
import uuid4 from "uuid4";

function Section({ sideBarOpen }) {
	const [block, setBlock] = useState("p");
	const [showBlockPopup, setShowBlockPopup] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [data, setData] = useState([]);
	const inputRef = useRef(null);

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

		// Focus on the existing input element
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			const newInput = {
				id: uuid4(),
				tag: block,
				content: inputValue,
			};

			setData((prevData) => [...prevData, newInput]);
			setInputValue("");
			setBlock("p");
		}
	};

	const handleDelete = (id) => {
		const updatedElements = data.filter((el) => el.id !== id);
		setData(updatedElements);
	};

	const handleTagChange = (id, tag) => {
		const updatedElements = data.map((el) => {
			if (el.id === id) {
				return { ...el, tag: tag === "h1" ? "p" : "h1" };
			} else {
				return el;
			}
		});

		setData(updatedElements);
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
				sideBarOpen ? "md:w-4/5" : "w-[95%] mx-auto"
			} h-full flex flex-col gap-10`}
		>
			<Header />
			<main className="w-11/12 md:w-3/4 flex flex-col gap-1 item-center justify-center mx-auto">
				<BarHeader />
				<div className="mt-5 mb-6">
					<p className="text-2xl md:text-3xl pb-4 mb-5 font-bold border-b border-gray-300">
						Front-end developer test project
					</p>
					<p className="text-sm md:text-base text-gray-600">
						Your goal is to make a page that looks exactly like this one, and
						has tha ability to create H1 text simply by typing / the H1, the
						typing text, and hitting enter.
					</p>
				</div>
				<div className="content flex flex-col gap-2 mb-2">
					{data.map((el, index) => (
						<TextElement
							el={el}
							key={el.id}
							handleDelete={handleDelete}
							onTagChange={handleTagChange}
							setData={setData}
							data={data}
						/>
					))}
				</div>

				<InputForm props={props} />
			</main>
		</section>
	);
}

export default Section;
