import { CRoutes } from '@src/constants'
import { useAuthContext } from '@src/contexts'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const { user, sessionLoading } = useAuthContext()

  if (sessionLoading) return <h1>Loading</h1>

  return user !== null ? <Outlet /> : <Navigate to={CRoutes.index} />
}

export default PrivateRoutes
