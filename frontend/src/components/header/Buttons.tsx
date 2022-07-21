import { StyledIconButon, SyledBox } from './buttons.styled'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authProvider';
import { useContext } from 'react';
import AccountMenu from './accontMenu';
import CartContext from '../../contexts/cartProvider';
import { Badge } from '@mui/material';

const Buttons = () => {
  const { auth } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <SyledBox>
      {!auth.token ? (
        <>
          <Link to="/login">
            <StyledIconButon aria-label='account' size='large' color='secondary'>
              <AccountCircleIcon fontSize='inherit' />
            </ StyledIconButon>
          </Link>
          <Link to="/login">
            <StyledIconButon aria-label='account' size='large' color='secondary'>
              <FavoriteIcon fontSize='inherit' />
            </ StyledIconButon>
          </Link>
          <Link to="/login">
            <StyledIconButon aria-label='cart' size='large' color='secondary'>
              <ShoppingCartIcon fontSize='inherit' />
            </ StyledIconButon>
          </Link>
        </>
      ) : (
        <>
          <AccountMenu role='user' />
          <StyledIconButon aria-label='account' size='large' color='secondary'>
            <FavoriteIcon fontSize='inherit' />
          </ StyledIconButon>
          <Link to="/cart">
            <StyledIconButon aria-label='cart' size='large' color='secondary'>
              <Badge badgeContent={`${cart.quantityProducts}`} color="primary">
                <ShoppingCartIcon fontSize='inherit' />
              </Badge>
            </ StyledIconButon>
          </Link>
        </>

      )}

    </SyledBox>
  )
}

export default Buttons