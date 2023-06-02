// React
import { Suspense, lazy } from 'react'

// Routing
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Constants
import { CRoutes } from '@src/constants'

// Custom components
const Index = lazy(() => import('@src/pages/Index/Index'))
const Login = lazy(() => import('@src/pages/Login/Login'))
const Register = lazy(() => import('@src/pages/Register/Register'))
const Dashboard = lazy(() => import('@src/pages/Dashboard/Dashboard'))
const PrivateRoutes = lazy(() => import('@src/routing/PrivateRoutes'))
const PublicRoutes = lazy(() => import('@src/routing/PublicRoutes'))

export const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path={CRoutes.index} element={<Index />} />
            <Route path={CRoutes.login} element={<Login />} />
            <Route path={CRoutes.register} element={<Register />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={CRoutes.dashboard} element={<Dashboard />} />
          </Route>
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
