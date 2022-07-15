import { Fragment, useContext, useEffect } from 'react';
import Carousel from "../../components/carousel/Index";
import HomeContainer from '../../components/homeContainer/Index';
import AuthContext from '../../contexts/authProvider';
import CartContext from '../../contexts/cartProvider';
import { CartStatus } from '../../enums/CartStatus';
import { useCart } from '../../hooks/useCart';
import { useUser } from '../../hooks/useUser';

const HomePage = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Fragment>
      <Carousel />
      <HomeContainer />
    </ Fragment>
  )
}


export default HomePage