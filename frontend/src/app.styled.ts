import { createTheme } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";

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
		text: {
			primary: "#2B3445",
		},
	},
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

export const GlobalStyle = createGlobalStyle`

  body {
    padding: 0px;
    margin: 0px;
		font-family: ${theme.typography.fontFamily};
		font-size: 0.92em;
		color:${theme.palette.text.primary}; ;
  }
`;
