import { ThemeContextInterface } from "../types";

export function themeReducer(
	theme: ThemeContextInterface,
	action: { type: string }
) {
	switch (action.type) {
		case "dark": {
			return { ...theme, dark: true };
		}
		case "white": {
			return { ...theme, dark: false };
		}

		default: {
			throw Error("Action not supported" + action.type);
		}
	}
}
