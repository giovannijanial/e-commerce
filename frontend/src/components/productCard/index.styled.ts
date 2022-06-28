import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledRating = styled(Rating)({
	marginTop: 10,
	"& .MuiRating-iconFilled": {
		color: "#ff6d75",
	},
	"& .MuiRating-iconHover": {
		color: "#ff3d47",
	},
});
