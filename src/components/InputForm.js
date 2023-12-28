import React from "react";
import BlockPopup from "./BlockPopup";

function InputForm({ props }) {
	const {
		inputRef,
		block,
		handleInputChange,
		handleKeyPress,
		inputValue,
		handleSelectBlock,
		showBlockPopup,
	} = props;
	return (
		<form className="relative">
			<input
				ref={inputRef}
				type="text"
				placeholder={`${
					block === "h1"
						? "Heading 1"
						: "Type / for blocks, @ to link docs or people"
				} `}
				className={`${
					block === "h1" ? "text-2xl font-bold font-mono" : ""
				} w-11/12 focus:border-none outline-none `}
				onChange={handleInputChange}
				onKeyDown={handleKeyPress}
				value={inputValue}
			/>
			{showBlockPopup && <BlockPopup onSelectBlock={handleSelectBlock} />}
		</form>
	);
}

export default InputForm;
