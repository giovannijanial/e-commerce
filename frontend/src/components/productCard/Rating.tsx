import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledRating } from './index.styled';

interface Props {
  rating: number,
}

const FavoriteRating = ({ rating }: Props) => {
  return (
    <>
      <StyledRating
        name="read-only"
        defaultValue={rating}
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