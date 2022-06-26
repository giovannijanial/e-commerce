import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyleTextField = styled(TextField)`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	div {
		border-radius: 1200px;
		height: 50px;
	}
`;
