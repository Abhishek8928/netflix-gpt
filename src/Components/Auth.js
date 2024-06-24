import React from "react";
import Header from "./Header";
import Form from "./Form";
import { bg_url } from "../Utils/Constant";
function Auth() {
	return (
		<div className="relative w-screen h-screen ">
			<div className="bg-gradient-to-r  from-black w-screen h-screen fixed"></div>
			<img className="w-full h-full object-cover" src={bg_url} alt="" />
			<Header />
            
            <Form />
		</div>
	);
}

export default Auth;
