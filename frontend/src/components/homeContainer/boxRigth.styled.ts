import { Box, styled } from "@mui/system";
import { theme } from "../../app.styled";

export const StyledBoxRight = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 30px;
	height: 100%;
`;

export const StyledBoxRightIn = styled(Box)`
	width: 100%;
	height: 100%;
	background-color: ${theme.palette.background.default};
`;
