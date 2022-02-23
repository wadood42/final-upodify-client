import { ReactChild, ReactChildren, useReducer } from "react";
import { ThemeContext, ThemeDispatchContext } from "../contexts/ThemeContext";
import { themeReducer } from "../reducers/themeReducer";
interface ThemeProviderInterface {
	children: ReactChild | ReactChildren;
}
function ThemeProvider({ children }: ThemeProviderInterface) {
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
