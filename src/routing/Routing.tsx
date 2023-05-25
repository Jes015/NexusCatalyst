// React
import { Suspense, lazy } from 'react'

// Routing
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Constants
import { CRoutes } from '../constants'

// Context
import { useAuthContext } from '../contexts'

// Custom components
const Index = lazy(async () => await import('../pages/Index/Index'))
const Login = lazy(async () => await import('../pages/Login/Login'))
const Register = lazy(async () => await import('../pages/Register/Register'))
const PrivateRoutes = lazy(async () => await import('./PrivateRoutes'))

export const Routing = () => {
  const { user } = useAuthContext()
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={CRoutes.index} element={<Index />}/>
          <Route path={CRoutes.login} element={<Login />}/>
          <Route path={CRoutes.register} element={<Register />}/>
          <Route element={<PrivateRoutes isAuth={user !== undefined} />}>
            <Route path={CRoutes.dashboard} element={<h1>Holaaaaa</h1>} />
          </Route>
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
