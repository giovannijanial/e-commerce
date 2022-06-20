import { createTheme } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    padding: 0px;
    margin: 0px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const theme = createTheme({
	palette: {
		primary: {
			main: "#FCA311",
		},
		secondary: {
			main: "#14213D",
		},
		background: {
			default: "#fff",
			paper: "#E5E5E5",
		},
	},
});
