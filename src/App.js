import { useState } from "react";
import { BsBook } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FiUnlock } from "react-icons/fi";
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function App() {
	const [sideBarOpen, setSideBarOpen] = useState(true);

	const handleSideBase = () => {
		setSideBarOpen(!sideBarOpen);
	};

	return (
		<div className="flex w-full h-screen">
			{
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
			}

			<section
				className={`${
					sideBarOpen ? "w-4/5" : "w-[90%] mx-auto"
				} h-full flex flex-col gap-4`}
			>
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
				<main className="w-4/5 flex item-center justify-center mx-auto">
					<input
						type="text"
						placeholder="Type / for blocks, @ to link docs or people"
						className="w-11/12 focus:border-none outline-none"
					/>
				</main>
			</section>
		</div>
	);
}

export default App;
