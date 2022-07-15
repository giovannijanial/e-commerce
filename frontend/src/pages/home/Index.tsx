import { Fragment, useContext } from 'react';
import Carousel from "../../components/carousel/Index";
import HomeContainer from '../../components/homeContainer/Index';
import AuthContext from '../../contexts/authProvider';

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