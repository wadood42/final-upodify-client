import { createContext } from "react";
import { ThemeContextInterface } from "../types";

export const ThemeContext = createContext<ThemeContextInterface>({
	dark: false,
});
export const ThemeDispatchContext = createContext<any | null>(null);
