import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../app.styled";

export const StyleHeader = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 140px;
	background-color: ${theme.palette.background.default};
	box-shadow: 0px 4px 16px rgba(43, 52, 69, 0.1);
`;

export const StyleContainer = styled(Container)`
	padding-left: 25px;
	padding-right: 25px;
	height: 70%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
