import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function App() {
	return (
		<div className="flex w-full h-screen">
			<div className="bg-red-200 h-full flex flex-col w-1/5">
				<button className="flex justify-end items-center p-3">
					<MdKeyboardDoubleArrowLeft />
				</button>
			</div>
			<section className="bg-green-200 w-4/5 mx-auto h-full flex flex-col"></section>
		</div>
	);
}

export default App;
