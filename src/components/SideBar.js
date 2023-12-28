import React from "react";
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function SideBar({ sideBarOpen, handleSideBase }) {
	return (
		<div
			className={`bg-red-200 ${
				sideBarOpen ? "w-1/5" : "w-10"
			} h-full flex flex-col`}
		>
			<button className="flex justify-end items-center p-3">
				<button type="button" onClick={handleSideBase}>
					{sideBarOpen ? (
						<MdKeyboardDoubleArrowLeft />
					) : (
						<MdKeyboardDoubleArrowRight />
					)}
				</button>
			</button>
			{sideBarOpen && <div>Content</div>}
		</div>
	);
}

export default SideBar;
