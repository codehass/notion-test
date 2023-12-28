import React from "react";

function EditPopup({ props }) {
	const { handleChangeToH1, handleDelete } = props;
	return (
		<div className="flex flex-col absolute top-[30px] left-[-10px] md:left-[-120px] bg-white border border-gray-300 space-y-2 shadow-md rounded-md py-3 z-10">
			<button
				className="cursor-pointer hover:bg-gray-100 py-1 px-2 text-sm"
				onClick={handleChangeToH1}
			>
				Change to H1
			</button>
			<button
				className="cursor-pointer text-start hover:bg-gray-100 py-1 px-2 text-sm w-full"
				onClick={handleDelete}
			>
				Delete
			</button>
		</div>
	);
}

export default EditPopup;
