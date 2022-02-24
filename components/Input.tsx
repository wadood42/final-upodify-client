import { useTheme } from "../hooks/useTheme";

import { useState } from "react";
import classes from "../styles/Form.module.css";

interface InputProps {
	label: string;
	type: string;
	handleChange: Function;
	value: string;
	name: string;
}

function Input({ label, type, handleChange, value, name }: InputProps) {
	const theme = useTheme();
	const [focus, setFocus] = useState(false);

	function handleFocus(e: React.FocusEvent<HTMLDivElement, Element>) {
		console.log("E", e);
		setFocus(true);
	}

	return (
		<div
			onFocus={(e) => handleFocus(e)}
			className={`${
				theme.dark ? classes.darkInputContainer : classes.inputContainer
			} ${focus && classes.focus}`}>
			<h6>{label}</h6>
			<input
				autoComplete='off'
				name={name}
				type={type}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
}

export default Input;
