import { NextPage } from "next";
import { useTheme } from "../hooks/useTheme";
import { useThemeBtn } from "../hooks/useThemeBtn";
import { useState } from "react";
import { SigninFormInterface } from "../types";
import classes from "../styles/Form.module.css";
import Input from "../components/Input";
import Link from "next/link";
const Signin: NextPage = () => {
	const [values, setValues] = useState<SigninFormInterface>(
		{} as SigninFormInterface
	);

	const theme = useTheme();
	console.log("theme in sing in", theme);

	return (
		<div
			className={`${
				theme.dark ? classes.darkFormContainer : classes.formContainer
			}`}>
			<h1>Sign in</h1>

			<form>
				<Input label='Email' type='email' />
				<Input label='Password' type='password' />
				<button className={`${theme.dark ? classes.darkBtn : classes.btn}`}>
					Sign in
				</button>
			</form>
			<div className={`${theme.dark ? classes.darkLink : classes.link}`}>
				<Link href='/signup'>
					<a>
						Dont have an account? <span>Sign up</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Signin;
