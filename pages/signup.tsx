import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NextPage } from "next";
import { useTheme } from "../hooks/useTheme";
import classes from "../styles/Form.module.css";
import Input from "../components/Input";
import Link from "next/link";
const Signup: NextPage = () => {
	const theme = useTheme();
	return (
		<div
			className={`${
				theme.dark ? classes.darkFormContainer : classes.formContainer
			}`}>
			<h1>Create account</h1>
			<form>
				<Input label='Email' type='email' />
				<Input label='Password' type='password' />
				<Input label='Confirm password' type='password' />
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
