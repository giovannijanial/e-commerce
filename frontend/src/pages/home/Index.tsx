import { Fragment, useContext } from 'react'
import HomeContainer from '../../components/homeContainer/Index'
import Carousel from "../../components/carousel/Index";
import AuthContext from '../../contexts/authProvider';
import DashBoardPage from '../dashboard/Index';

const HomePage = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Fragment>
      {auth.user.role === "admin" ? (
        <>
          <DashBoardPage />
        </>
      ) : (
        <>
          <Carousel />
          <HomeContainer />
        </>
      )}

    </ Fragment>
  )
}


export default HomePage