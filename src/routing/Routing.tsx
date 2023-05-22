import { Suspense, lazy } from 'react'
// Routing
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CRoutes } from '../constants'

// Custom components
const Index = lazy(async () => await import('../pages/Index/Index'))
const Login = lazy(async () => await import('../pages/Login/Login'))
const Register = lazy(async () => await import('../pages/Register/Register'))
const PrivateRoutes = lazy(async () => await import('./PrivateRoutes'))

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={CRoutes.index} element={<Suspense children={<Index />} />} />
          <Route path={CRoutes.login} element={<Suspense children={<Login />} />} />
          <Route path={CRoutes.register} element={<Suspense children={<Register />} />} />
          <Route element={<Suspense children={<PrivateRoutes isAuth={false} />} />}>
            <Route path={CRoutes.dashboard} element={<h1>Holaaaaa</h1>} />
          </Route>
          <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
