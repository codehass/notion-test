import React from "react";
import { RxText } from "react-icons/rx";

const BlockPopup = ({ onSelectBlock }) => {
	const blocks = ["Heading 1", "Text"];

	return (
		<div className="absolute top-12 left-0 bg-white border border-gray-300 space-y-2 shadow-md rounded-md py-3">
			<div className="px-3">
				<h2 className="font-bold">Add blocks</h2>
				<p className="text-gray-400">
					Keep typing to filter, or escape to exit
				</p>
			</div>
			<div className="flex items-center gap-1 px-3">
				<p className="text-gray-600">Filtering keywords: </p>{" "}
				<span className="bg-blue-600 p-1 text-sm rounded-sm text-white">
					{blocks.length}
				</span>
			</div>
			{blocks.map((tag, index) => (
				<div
					key={index}
					className="cursor-pointer hover:bg-gray-100 p-2 px-3 flex items-center gap-1"
					onClick={() => onSelectBlock(tag)}
				>
					<RxText className="text-5xl text-gray-400" />
					<div className="flex flex-col">
						<p className="font-bold">{tag}</p>
						<span className="text-sm text-gray-400">
							Shortcut: type # + space
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlockPopup;
