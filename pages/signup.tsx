import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NextPage } from "next";
import { useTheme } from "../hooks/useTheme";
import classes from "../styles/Form.module.css";
import Input from "../components/Input";
import Link from "next/link";
import { SignupFormInterface } from "../types";
const Signup: NextPage = () => {
	const [values, setValues] = useState<SignupFormInterface>(
		{} as SignupFormInterface
	);
	const theme = useTheme();

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {}
	return (
		<div
			className={`${
				theme.dark ? classes.darkFormContainer : classes.formContainer
			}`}>
			<h1>Create account</h1>
			<form>
				<Input
					label='Email'
					type='email'
					value={values.email}
					handleChange={handleChange}
					name='email'
				/>
				<Input
					label='Password'
					type='password'
					value={values.password}
					name='password'
					handleChange={handleChange}
				/>
				<Input
					label='Confirm password'
					type='password'
					name='confirmPassword'
					value={values.confirmPassword}
					handleChange={handleChange}
				/>
				<button className={`${theme.dark ? classes.darkBtn : classes.btn}`}>
					Create
				</button>

				<div className={`${theme.dark ? classes.darkLink : classes.link}`}>
					<Link href='/signin' passHref>
						<a>
							Have an account? <span>Sign in</span>
						</a>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Signup;
