import React from "react";
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function SideBar({ sideBarOpen, handleSideBase }) {
	return (
		<div
			className={`bg-[#fbfbfa] ${
				sideBarOpen ? "w-10 md:w-1/5 h-full" : "w-10 md:w-16"
			}  flex flex-col`}
		>
			<div className="flex justify-between items-center p-3 hover:bg-[#EBEBEA] rounded-md">
				<div className="flex items-center gap-1 ">
					<span className="bg-gray-300 px-1 rounded-sm text-sm">H</span>
					<p
						className={` ${
							sideBarOpen ? "md:block" : ""
						} text-xs sm:text-xs lg:text-sm xl:text-base font-semibold cursor-pointer hidden
						`}
					>
						Hassan EL <span className="hidden lg:inline-block">OUARDY</span>
					</p>
				</div>
				<button
					type="button"
					onClick={handleSideBase}
					className="hidden md:block"
				>
					{sideBarOpen ? (
						<MdKeyboardDoubleArrowLeft className="text-2xl hover:bg-gray-300 px-1 rounded-sm" />
					) : (
						<MdKeyboardDoubleArrowRight className="text-2xl hover:bg-gray-300 px-1 rounded-sm" />
					)}
				</button>
			</div>
			{sideBarOpen && (
				<div className=" justify-center m-auto hidden md:flex">
					Side bar Content
				</div>
			)}
		</div>
	);
}

export default SideBar;
