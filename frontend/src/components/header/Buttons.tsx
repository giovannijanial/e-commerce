import { IconButton } from '@mui/material'
import { SyledBox } from './buttons.styled'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Buttons = () => {
  return (
    <SyledBox>
      <IconButton aria-label='account' size='large'>
        <AccountCircleIcon fontSize='inherit' />
      </ IconButton>
      <IconButton aria-label='cart' size='large'>
        <ShoppingCartIcon fontSize='inherit' />
      </ IconButton>
    </SyledBox>
  )
}

export default Buttons