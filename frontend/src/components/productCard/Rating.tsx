import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledRating } from './index.styled';

const FavoriteRating = () => {
  return (
    <>
      <StyledRating
        name="read-only"
        defaultValue={4.5}
        precision={0.5}
        readOnly
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </>
  )
}

export default FavoriteRating