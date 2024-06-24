import { useState, useRef } from "react";
import checkFormData from "../Utils/validateForm";
export default function Form() {
	const [authToggle, setAuthToggle] = useState(true);
	const [errMessage, setErrorMessage] = useState({ email: "", password: "" });
	const email = useRef();
	const password = useRef();

	function submitFormHandler() {
		const message = checkFormData(email.current.value, password.current.value);
		setErrorMessage(message);
		if (null) {
		}
	}

	const toggleHandler = () => {
		setAuthToggle((current) => !current);
        setErrorMessage({ email: "", password: "" })
	};

	return (
		<>
			<div className="absolute rounded p-12 w-96 -translate-x-[50%] -translate-y-[50%] bg-[rgba(0,0,0,0.8)] top-1/2 left-1/2  text-white">
				<h2 className="font-medium text-3xl pb-8">
					{authToggle ? "Sign In" : "Sign Up"}
				</h2>
				<form onSubmit={(event) => event.preventDefault()} action="">
					{!authToggle && (
						<div className="input-wrapper box-border mb-4  ">
							<input
								type="text"
								className="w-full py-3 px-4 rounded bg-transparent  "
								placeholder="username"
							/>
						</div>
					)}
					<div className="input-wrapper box-border mb-4  ">
						<input
							ref={email}
							type="text"
							className="w-full py-3 px-4 rounded bg-transparent  "
							placeholder="Email"
						/>
                        <small className="text-red-600 text-sm font-bold my-2 block">{errMessage?.email && errMessage.email}</small>
					</div>
					<div className="input-wrapper box-border mb-4 ">
						<input
							ref={password}
							className="w-full py-3 px-4 rounded bg-transparent"
							type="password"
							placeholder="Password"
						/>
                        <small className="text-red-600 text-sm font-bold my-2 block">{errMessage?.password && errMessage.password}</small>
					</div>

					<button
						onClick={submitFormHandler}
						className="w-full font-medium bg-red-600 rounded py-2"
						type="submit"
					>
						{" "}
						{authToggle ? "Sign In" : "Sign Up"}{" "}
					</button>
				</form>
				<p className="text-zinc-400 text-sm mt-6 text-center">
					{authToggle ? "New to Netflix ?" : "Already a Account ?"}{" "}
					<span
						onClick={toggleHandler}
						className="text-zinc-100 cursor-pointer hover:underline"
					>
						{" "}
						{authToggle ? "Sign up now." : "Sign in now."}{" "}
					</span>
				</p>
			</div>
		</>
	);
}
