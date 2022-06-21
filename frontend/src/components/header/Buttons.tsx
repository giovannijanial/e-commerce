import { StyledIconButon, SyledBox } from './buttons.styled'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Buttons = () => {
  return (
    <SyledBox>
      <StyledIconButon aria-label='account' size='large' color='secondary'>
        <AccountCircleIcon fontSize='inherit' />
      </ StyledIconButon>
      <StyledIconButon aria-label='account' size='large' color='secondary'>
        <FavoriteIcon fontSize='inherit' />
      </ StyledIconButon>
      <StyledIconButon aria-label='cart' size='large' color='secondary'>
        <ShoppingCartIcon fontSize='inherit' />
      </ StyledIconButon>
    </SyledBox>
  )
}

export default Buttons