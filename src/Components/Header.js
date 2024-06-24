import React from "react";
import { netflix_logo } from "../Utils/Constant";

export default function Header() {
	return (
		<div className=" w-full md:w-[80rem] -translate-x-[50%] py-3 px-4 md:px-0    mx-auto absolute left-[50%] top-0">
			<div className="w-28 md:w-44">
				<img className="w-full" src={netflix_logo} alt="" />
			</div>
		</div>
	);
}
