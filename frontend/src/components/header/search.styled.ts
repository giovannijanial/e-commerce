import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyleSearchBox = styled(Box)`
	display: flex;
	justify-content: center;
	position: relative;
	margin-left: 0;
	margin-right: 0;
	max-width: 670px;
`;

export const StyleTextField = styled(TextField)`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	width: 670px;
	div {
		border-radius: 1200px;
	}
`;
