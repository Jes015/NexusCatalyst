import { CRoutes } from '@src/constants'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Index = lazy(() => import('@src/pages/Index/Index'))
const Login = lazy(() => import('@src/pages/Login/Login'))
const Dashboard = lazy(() => import('@src/pages/Dashboard/Dashboard'))
const NotFound = lazy(() => import('@src/pages/NotFound/NotFound'))
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
            <Route path={CRoutes.register} element={<Index />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={CRoutes.dashboard} element={<Dashboard />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
