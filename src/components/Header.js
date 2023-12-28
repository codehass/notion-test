import React from "react";
import { BsBook } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FiUnlock } from "react-icons/fi";

function Header() {
	return (
		<header className="flex items-center justify-between py-3 px-2 w-full min-w-[350px]">
			<div className="flex items-center gap-1">
				<BsBook />
				<div className="flex items-center gap-1 ">
					<a
						href="google.com"
						className="text-xs sm:text-sm text-gray-500 hover:text-black font-medium"
					>
						Main /{" "}
					</a>
					<a
						href="google.com"
						className="text-xs sm:text-sm text-gray-500 hover:text-black font-medium"
					>
						Getting <span className="hidden sm:inline-block">started</span> /{" "}
					</a>
					<a
						href="google.com"
						className="hidden text-xs sm:text-sm sm:block text-gray-500 hover:text-black font-medium"
					>
						Front-end developer test ...{" "}
					</a>
				</div>
			</div>
			<div className="flex gap-1">
				<div className="text-xs sm:text-sm flex items-center gap-1 text-gray-500 font-medium">
					<FiUnlock />
					<p>Editing</p>
				</div>
				<span>|</span>
				<div className="text-blue-500 flex items-center gap-1">
					<p className="font-bold text-xs">Publish Space </p>
					<FaChevronDown />{" "}
				</div>
			</div>
		</header>
	);
}

export default Header;
