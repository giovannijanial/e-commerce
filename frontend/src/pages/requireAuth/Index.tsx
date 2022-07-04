import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth";


const RequireAuthPage = () => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("user", auth)
  return (
    auth?.token
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuthPage