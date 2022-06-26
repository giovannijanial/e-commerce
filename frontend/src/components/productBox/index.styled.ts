import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../app.styled";

export const SBoxProduct = styled(Box)`
	width: 250px;
	height: 300px;
	display: flex;
	border: 1px solid red;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
