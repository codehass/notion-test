import React, { useState } from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import EditPopup from "./EditPopup";

function TextElement({ el, handleDelete, onTagChange, data, setData }) {
	const [popupOpen, setPopupOpen] = useState(false);
	const [text, setText] = useState(el.content);
	const [editableOn, setEditableOn] = useState(false);

	const handleEditPopup = () => {
		setPopupOpen(!popupOpen);
	};

	const handleDelete1 = () => {
		handleDelete(el.id);
		setPopupOpen(false);
	};

	const handleChangeTag = () => {
		onTagChange(el.id, el.tag);
		setPopupOpen(false);
	};

	const handleTextChange = (e, id) => {
		const updatedText = e.target.value;
		setText(updatedText);
		const updatedElements = data.map((el) => {
			if (el.id === id) {
				return { ...el, content: updatedText };
			} else {
				return el;
			}
		});

		setData(updatedElements);
	};

	const keyPress = (event, id) => {
		if (event.key === "Enter") {
			handleTextChange(event, id);
		} else if (event.key === "Backspace" && text === "") {
			// event.preventDefault();
			// const updatedElements = data.filter((el) => el.id !== id);
			// setData(updatedElements);
			handleDelete1(el.id);
		}
	};

	// const deleteThis = () => {
	// 	console.log(el.id);
	// };
	const props = { handleChangeTag, handleDelete1 };

	return el.tag === "h1" ? (
		<div className="group flex items-center relative">
			{popupOpen && <EditPopup props={props} el={el} />}
			<div className="hidden group-hover:block absolute left-[-15px]">
				<PiDotsSixVerticalBold
					className="text-gray-600 text-lg cursor-pointer"
					onClick={handleEditPopup}
				/>
			</div>
			{!editableOn ? (
				<h1
					className="text-2xl font-bold font-mono pl-1"
					onClick={() => setEditableOn(!editableOn)}
					key={el.id}
				>
					{el.content}
				</h1>
			) : (
				<input
					className="text-2xl font-bold font-mono pl-1"
					type="text"
					value={text}
					onChange={(e) => handleTextChange(e, el.id)}
					onKeyDown={(e) => keyPress(e, el.id)}
					id={`${el.id}`}
				/>
			)}
		</div>
	) : (
		<div className="group flex items-center relative">
			{popupOpen && <EditPopup props={props} el={el} />}
			<div className="hidden group-hover:block absolute left-[-15px]">
				<PiDotsSixVerticalBold
					className="text-gray-600 text-lg cursor-pointer"
					onClick={handleEditPopup}
				/>
			</div>
			{!editableOn ? (
				<p
					className="font-mono pl-1"
					onClick={() => setEditableOn(!editableOn)}
					key={el.id}
				>
					{el.content}
				</p>
			) : (
				<input
					id={`${el.id}`}
					className="font-mono pl-1"
					type="text"
					value={text}
					onChange={(e) => handleTextChange(e, el.id)}
					onKeyDown={(e) => keyPress(e, el.id)}
				/>
			)}
		</div>
	);
}

export default TextElement;
