import { NextPage } from "next";
import { useTheme } from "../hooks/useTheme";
import { useThemeBtn } from "../hooks/useThemeBtn";
import { useState } from "react";
import { SigninFormInterface } from "../types";
import classes from "../styles/Form.module.css";
import Input from "../components/Input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Signin: NextPage = () => {
	let herokuURL = "https://blooming-beach-06253.herokuapp.com/signin";
	let LocalURL = "http://localhost:5000";
	const [error, setError] = useState("");

	const router = useRouter();
	const [values, setValues] = useState<SigninFormInterface>(
		{} as SigninFormInterface
	);
	const theme = useTheme();

	async function handleSubmit(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		e.preventDefault();
		console.log("handling submit");

		axios
			.post(herokuURL, {
				email: values.email,
				password: values.password,
			})
			.then((res) => {
				console.log("response after sign in", res);
				if (res.statusText === "OK") {
					router.push("/profile");
				}
			})
			.catch((error) => {
				console.log("Error after sign in", error.response.data);
				setError(error.response.data);
			});
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		// console.log("handing change", e.target.value);

		setValues((values) => {
			return {
				...values,
				[e.target.name]: e.target.value,
			};
		});
	}
	return (
		<div
			className={`${
				theme.dark ? classes.darkFormContainer : classes.formContainer
			}`}>
			<h1>Sign in</h1>
			{error && <p className={classes.error}>{error}</p>}

			<form>
				<Input
					name='email'
					label='Email'
					type='email'
					handleChange={handleChange}
					value={values.email}
				/>
				<Input
					name='password'
					label='Password'
					type='password'
					handleChange={handleChange}
					value={values.password}
				/>

				<button
					onClick={(e) => handleSubmit(e)}
					disabled={!values.email || !values.password}
					className={`${theme.dark ? classes.darkBtn : classes.btn}`}>
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
