import { Navigate, Outlet } from 'react-router-dom'
import { CRoutes } from '../constants'
import { useAuthContext } from '../contexts'

const PublicRoutes = () => {
  const { user, sessionLoading } = useAuthContext()

  if (sessionLoading) return <h1>Loading</h1>

  return ((user != null) ? <Navigate to={CRoutes.dashboard} /> : <Outlet />)
}

export default PublicRoutes
