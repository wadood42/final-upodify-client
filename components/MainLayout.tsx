import classes from "../styles/MainLayout.module.css";
import ThemeProvider from "./ThemeProvider";
import { useTheme } from "../hooks/useTheme";
import React, { ReactChild, ReactChildren } from "react";

interface LayoutInterface {
	children: ReactChild | ReactChildren;
}
function MainLayout({ children }: LayoutInterface) {
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
