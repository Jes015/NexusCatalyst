// React
import { Suspense, lazy } from 'react'

// Routing
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Constants
import { CRoutes } from '@src/constants'

// Custom components
const Index = lazy(async () => await import('@src/pages/Index/Index'))
const Login = lazy(async () => await import('@src/pages/Login/Login'))
const Register = lazy(async () => await import('@src/pages/Register/Register'))
const Dashboard = lazy(async () => await import('@src/pages/Dashboard/Dashboard'))
const PrivateRoutes = lazy(async () => await import('@src/routing/PrivateRoutes'))
const PublicRoutes = lazy(async () => await import('@src/routing/PublicRoutes'))

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
