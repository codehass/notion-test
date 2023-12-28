import React, { useState } from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import EditPopup from "./EditPopup";

function TextElement({ el, index, onDelete, onTagChange }) {
	const [popupOpen, setPopupOpen] = useState(false);

	const handleEditPopup = () => {
		setPopupOpen(!popupOpen);
	};

	const handleDelete = () => {
		onDelete(index);
	};

	const handleChangeToH1 = () => {
		onTagChange(index, "h1");
		setPopupOpen(false);
	};

	const props = { handleChangeToH1, handleDelete };

	return el.tag === "h1" ? (
		<div className="group flex items-center relative">
			{popupOpen && <EditPopup props={props} />}
			<div className="hidden group-hover:block absolute left-[-15px]">
				<PiDotsSixVerticalBold
					className="text-gray-600 text-lg cursor-pointer"
					onClick={handleEditPopup}
				/>
			</div>
			<h1 className="text-2xl font-bold font-mono pl-1" key={index}>
				{el.content}
			</h1>
		</div>
	) : (
		<div className="group flex items-center relative">
			{popupOpen && <EditPopup props={props} />}
			<div className="hidden group-hover:block absolute left-[-15px]">
				<PiDotsSixVerticalBold
					className="text-gray-600 text-lg cursor-pointer"
					onClick={handleEditPopup}
				/>
			</div>
			<p className="font-mono pl-1" key={index}>
				{el.content}
			</p>
		</div>
	);
}

export default TextElement;
