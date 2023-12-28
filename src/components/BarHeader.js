import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { CiCloud } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsClock } from "react-icons/bs";
import { LuArrowDownLeft } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";

function BarHeader() {
	return (
		<div className="flex justify-between items-center border p-1 rounded-md text-gray-500">
			<div className="flex items-center gap-2">
				<p className="bg-[#D1FAE5] px-1 rounded-sm text-sm">P</p>
				<span>|</span>
				<div className="flex items-center gap-1">
					<BsClock className="text-sm" />
					<span>0min</span>
				</div>
				<span>|</span>
				<div className="bg-[#FE6A75] rounded-full p-[3px]">
					<FaUserAlt className="text-sm" />
				</div>
				<span>|</span>
				<div className="flex items-center gap-1">
					<LuArrowDownLeft className="text-sm" />
					<p> 0</p>
				</div>
			</div>
			<div className="flex items-center gap-1">
				<FiCheckCircle />
				<CiCloud className="text-green-600" />
				<HiOutlineDotsVertical />
			</div>
		</div>
	);
}

export default BarHeader;
