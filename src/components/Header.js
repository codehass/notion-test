import React from "react";
import { BsBook } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FiUnlock } from "react-icons/fi";

function Header() {
	return (
		<header className="flex justify-between p-2">
			<div className="flex justify-center items-center gap-1">
				<BsBook />
				<div>
					<a
						href="google.com"
						className="text-gray-500 hover:text-black font-medium"
					>
						Main /{" "}
					</a>
					<a
						href="google.com"
						className="text-gray-500 hover:text-black font-medium"
					>
						Getting started /{" "}
					</a>
					<a
						href="google.com"
						className="text-gray-500 hover:text-black font-medium"
					>
						Front-end developer test ...{" "}
					</a>
				</div>
			</div>
			<div className="flex justify-between gap-1">
				<div className="flex items-center gap-1 text-gray-500 font-medium">
					<FiUnlock />
					<p>Editing</p>
				</div>
				<span>|</span>
				<div className="text-blue-500 flex items-center gap-1">
					<p className="font-bold">Publish Space </p>
					<FaChevronDown />{" "}
				</div>
			</div>
		</header>
	);
}

export default Header;
