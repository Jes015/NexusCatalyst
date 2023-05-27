import { Navigate, Outlet } from 'react-router-dom'
import { CRoutes } from '../constants'
import { useAuthContext } from '../contexts'

const PrivateRoutes = () => {
  const { user, sessionLoading } = useAuthContext()

  if (sessionLoading) return <h1>Loading</h1>

  return user !== null ? <Outlet /> : <Navigate to={CRoutes.login} />
}

export default PrivateRoutes
