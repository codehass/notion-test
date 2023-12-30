import React from "react";

function EditPopup({ props, el }) {
	const { tag, id } = el;
	const { handleChangeTag, handleDelete1 } = props;
	return (
		<div className="flex flex-col absolute top-[30px] left-[-10px] md:left-[-120px] bg-white border border-gray-300 space-y-2 shadow-md rounded-md py-3 z-10">
			<button
				className="cursor-pointer hover:bg-gray-100 py-1 px-2 text-sm"
				onClick={handleChangeTag}
			>
				Change to {tag === "h1" ? "Text" : "H1"}
			</button>
			<button
				className="cursor-pointer text-start hover:bg-gray-100 py-1 px-2 text-sm w-full"
				onClick={() => handleDelete1(id)}
			>
				Delete
			</button>
		</div>
	);
}

export default EditPopup;
