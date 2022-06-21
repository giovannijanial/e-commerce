import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../app.styled";

export const StyledCardBanner = styled(Card)`
	height: 400px;
	position: relative;
`;

export const StyledCardMedia = styled(CardMedia)`
	background-color: white;
	height: 100%;
	overflow: hidden;
	position: relative;

	transition: 300ms;
	cursor: pointer;
	&:hover {
		filter: brightness(115%);
	}
`;

export const StyledTyphographic = styled(Typography)`
	text-overflow: ellipsis;
	position: absolute;
	bottom: 0;
	padding: 15px;
	background-color: black;
	color: white;
	opacity: 0.6;

	width: 100%;
	height: 10%;

	font: {
		size: 21px;
		weight: 200;
	}

	transition: 300ms;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

export const StyledBannerGrid = styled(Grid)`
	height: 100%;
	position: relative;
`;

export const StyledCardContent = styled(CardContent)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: white;
	background-color: ${theme.palette.primary.main};
	height: 100%;
	position: relative;
	cursor: pointer;
	padding: 30px;
	transition: 300ms;

	&:hover,
	&:active {
		background-color: ${theme.palette.primary.dark};

		button {
			background-color: ${theme.palette.background.paper};
			color: ${theme.palette.primary.main};
		}
	}
`;

export const StyledViewButton = styled(Button)`
	margin-top: 40px;
	color: white;

	font-size: 25px;
	border: 3px solid white;
	text-transform: capitalize;
	transition: 200ms;
`;

export const StyledTittle = styled(Typography)`
	font-size: 30px;
	font-weight: 500;
	color: white;
`;

export const StyledCaption = styled(Typography)`
	margin-top: 10px;
	font-size: 18px;
	color: white;
`;
