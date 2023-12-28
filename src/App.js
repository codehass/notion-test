import { useState } from "react";
import SideBar from "./components/SideBar";
import Section from "./components/Section";

function App() {
	const [sideBarOpen, setSideBarOpen] = useState(true);

	const handleSideBase = () => {
		setSideBarOpen(!sideBarOpen);
	};

	return (
		<div className="flex w-full h-screen">
			<SideBar sideBarOpen={sideBarOpen} handleSideBase={handleSideBase} />
			<Section sideBarOpen={sideBarOpen} />
		</div>
	);
}

export default App;
