import { Box, styled } from "@mui/system";
import { theme } from "../../../app.styled";

export const StyledBoxMid = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 10px;
	height: 100%;
`;

export const SProductBoxMain = styled(Box)`
	width: 100%;
	height: 100%;
	background-color: ${theme.palette.background.default};
`;
