import classes from "../styles/MainLayout.module.css";
import ThemeProvider from "./ThemeProvider";
import { useTheme } from "../hooks/useTheme";

function MainLayout({ children }) {
	const theme = useTheme();
	console.log("theme in mainlayout", theme);
	return (
		<div
			className={`${theme.dark ? classes.darkMainLayout : classes.mainLayout}`}>
			{children}
		</div>
	);
}

export default MainLayout;
