import React from "react";
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function SideBar({ sideBarOpen, handleSideBase }) {
	return (
		<div
			className={`bg-[#fbfbfa] ${
				sideBarOpen ? "w-1/5 h-full" : "w-16"
			}  flex flex-col`}
		>
			<div className="flex justify-between items-center p-3 hover:bg-[#EBEBEA] rounded-md">
				<div className="flex items-center gap-1 ">
					<span className="bg-gray-300 px-1 rounded-sm text-sm">H</span>
					<p
						className={` ${
							sideBarOpen ? "" : "hidden"
						} text-sm font-semibold cursor-pointer
						`}
					>
						Hassan EL OUARDY
					</p>
				</div>
				<button type="button" onClick={handleSideBase}>
					{sideBarOpen ? (
						<MdKeyboardDoubleArrowLeft className="text-2xl hover:bg-gray-300 px-1 rounded-sm" />
					) : (
						<MdKeyboardDoubleArrowRight className="text-2xl hover:bg-gray-300 px-1 rounded-sm" />
					)}
				</button>
			</div>
			{sideBarOpen && (
				<div className="flex justify-center m-auto">Side bar Content</div>
			)}
		</div>
	);
}

export default SideBar;
