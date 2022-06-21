import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../app.styled";

export const SyledBox = styled(Box)`
	width: 100px;
	display: flex;
	justify-content: space-around;
`;

export const StyledIconButon = styled(IconButton)`
	&:hover {
		color: ${theme.palette.primary.main};
	}
`;
