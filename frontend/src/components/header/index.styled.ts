import { Container, Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../app.styled";

export const StyledGrid = styled(Grid)`
	height: 140px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const StyledGridItem = styled(Grid)`
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledGridNavigation = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
