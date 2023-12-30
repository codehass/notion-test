import React, { useEffect, useRef, useState } from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import EditPopup from "./EditPopup";

function TextElement({ el, handleDelete, onTagChange, data, setData }) {
	const { id, tag, content } = el;
	const [popupOpen, setPopupOpen] = useState(false);
	const [text, setText] = useState(content);
	const [editableOn, setEditableOn] = useState(false);
	const popupRef = useRef(null);

	const handleEditPopup = () => {
		setPopupOpen(!popupOpen);
	};

	const handleDeleteElement = () => {
		handleDelete(id);
		setPopupOpen(false);
	};

	const handleChangeTag = () => {
		onTagChange(id, tag);
		setPopupOpen(false);
	};

	const handleTextChange = (e, id) => {
		const updatedText = e.target.value;
		setText(updatedText);
		const updatedElements = data.map((item) => {
			if (item.id === id) {
				return { ...item, content: updatedText };
			} else {
				return item;
			}
		});

		setData(updatedElements);
	};

	const keyPress = (event, id) => {
		if (event.key === "Enter") {
			handleTextChange(event, id);
		} else if (event.key === "Backspace" && text === "") {
			handleDeleteElement(id);
		}
	};

	const props = {
		handleChangeTag,
		handleDeleteElement,
		setPopupOpen,
		popupOpen,
	};

	const handleClickOutside = (event) => {
		if (popupRef.current && !popupRef.current.contains(event.target)) {
			setPopupOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="group flex items-center relative">
			{popupOpen && (
				<div ref={popupRef}>
					<EditPopup props={props} el={el} />
				</div>
			)}
			<div className="hidden group-hover:block absolute left-[-15px]">
				<PiDotsSixVerticalBold
					className="text-gray-600 text-lg cursor-pointer"
					onClick={handleEditPopup}
				/>
			</div>

			{tag === "h1" ? (
				!editableOn ? (
					<h1
						className="text-2xl font-bold font-mono pl-1"
						onClick={() => setEditableOn(!editableOn)}
						key={id}
					>
						{content}
					</h1>
				) : (
					<input
						className="text-2xl font-bold font-mono pl-1"
						type="text"
						value={text}
						onChange={(e) => handleTextChange(e, id)}
						onKeyDown={(e) => keyPress(e, id)}
						id={`${id}`}
					/>
				)
			) : !editableOn ? (
				<p
					className="font-mono pl-1"
					onClick={() => setEditableOn(!editableOn)}
					key={id}
				>
					{content}
				</p>
			) : (
				<input
					id={`${id}`}
					className="font-mono pl-1"
					type="text"
					value={text}
					onChange={(e) => handleTextChange(e, id)}
					onKeyDown={(e) => keyPress(e, id)}
				/>
			)}
		</div>
	);
}

export default TextElement;
