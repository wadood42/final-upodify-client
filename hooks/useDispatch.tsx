import { ThemeContext, ThemeDispatchContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export function useDispatch() {
	return useContext(ThemeDispatchContext);
}
