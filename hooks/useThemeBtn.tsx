import { useDispatch } from "./useDispatch";
import { useTheme } from "./useTheme";

export function useThemeBtn() {
	const dispatch = useDispatch();
	const theme = useTheme();

	let themeBtn;

	if (theme.dark) {
		themeBtn = (
			<button onClick={() => dispatch({ type: "white" })}>White</button>
		);
	} else {
		themeBtn = <button onClick={() => dispatch({ type: "dark" })}>Dark</button>;
	}

	return themeBtn;
}
