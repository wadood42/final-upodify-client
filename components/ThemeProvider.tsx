import { useReducer } from "react";
import { ThemeContext, ThemeDispatchContext } from "../contexts/ThemeContext";
import { themeReducer } from "../reducers/themeReducer";

function ThemeProvider({ children }) {
	const [theme, dispatch] = useReducer(themeReducer, { dark: false });

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeDispatchContext.Provider value={dispatch}>
				{children}
			</ThemeDispatchContext.Provider>
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
