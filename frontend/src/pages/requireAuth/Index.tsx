import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom"
import AuthContext from "../../contexts/authProvider";


const RequireAuthPage = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  console.log(auth)

  return (
    auth?.token
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuthPage