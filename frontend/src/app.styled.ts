import { createTheme } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";

export const theme = createTheme({
	palette: {
		primary: {
			light: "#E5383B",
			main: "#BA181B",
			dark: "#660708",
		},
		secondary: {
			light: "#B1A7A6",
			main: "#161A1D",
			dark: "#0B090A",
		},
		background: {
			default: "#F5F3F4",
			paper: "#FFF",
		},
		text: {
			primary: "#161A1D",
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
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					h1: "h2",
					h2: "h2",
					h3: "h2",
					h4: "h2",
					h5: "h2",
					h6: "h2",
					subtitle1: "h2",
					subtitle2: "h2",
					body1: "span",
					body2: "span",
				},
			},
		},
	},
});

export const GlobalStyle = createGlobalStyle`

  body {
    padding: 0px;
    margin: 0px;
		font-family: ${theme.typography.fontFamily};
		font-size: 0.92em;
		color:${theme.palette.text.primary};
  }
	a {
		text-decoration: none;
		color: ${theme.palette.text.primary};
	}
`;
