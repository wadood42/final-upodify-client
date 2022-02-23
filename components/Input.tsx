import { useTheme } from "../hooks/useTheme";

import { useState } from "react";
import classes from "../styles/Form.module.css";

interface InputProps {
	label: string;
	type: string;
}

function Input({ label, type }: InputProps) {
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
			<input type={type} />
		</div>
	);
}

export default Input;
