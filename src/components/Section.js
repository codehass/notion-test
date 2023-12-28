import React from "react";
import Header from "./Header";

function Section({ sideBarOpen }) {
	return (
		<section
			className={`${
				sideBarOpen ? "w-4/5" : "w-[95%] mx-auto"
			} h-full flex flex-col gap-10`}
		>
			<Header />
			<main className="w-4/5 flex item-center justify-center mx-auto">
				<input
					type="text"
					placeholder="Type / for blocks, @ to link docs or people"
					className="w-11/12 focus:border-none outline-none"
				/>
			</main>
		</section>
	);
}

export default Section;
