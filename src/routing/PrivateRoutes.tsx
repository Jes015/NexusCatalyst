import { CRoutes } from '@src/constants'
import { useAuthContext } from '@src/contexts'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const { user, sessionLoading } = useAuthContext()

  if (sessionLoading === true) return <h1>Loading</h1>

  return user !== null ? <Outlet /> : <Navigate to={CRoutes.login} />
}

export default PrivateRoutes
