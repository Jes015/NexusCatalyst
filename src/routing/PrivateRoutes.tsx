import { Navigate, Outlet } from 'react-router-dom'
import { CRoutes } from '../constants'

interface props {
  isAuth: boolean
}
export const PrivateRoutes = ({ isAuth = false }: props) => {
  return isAuth ? <Outlet /> : <Navigate to={CRoutes.login} />
}