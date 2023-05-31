import { CRoutes } from '@src/constants'
import { useAuthContext } from '@src/contexts'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
  const { user, sessionLoading } = useAuthContext()

  if (sessionLoading) return <h1>Loading</h1>

  return ((user != null) ? <Navigate to={CRoutes.dashboard} /> : <Outlet />)
}

export default PublicRoutes
