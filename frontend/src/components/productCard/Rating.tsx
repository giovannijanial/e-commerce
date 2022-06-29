import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledRating } from './index.styled';

const FavoriteRating = () => {
  return (
    <>
      <StyledRating
        name="read-only"
        readOnly
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </>
  )
}

export default FavoriteRating