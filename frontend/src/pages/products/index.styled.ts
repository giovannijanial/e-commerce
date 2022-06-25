import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const SBoxProducts = styled(Box)`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	gap: 10px;
`;

export const SBoxProduct = styled(Box)`
	width: 250px;
	height: 300px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
