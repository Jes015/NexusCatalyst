// Routing
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CRoutes } from '../constants'

// Custom components
import { Index, Login } from '../pages'
import { PrivateRoutes } from './'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CRoutes.index} element={<Index />} />
        <Route path={CRoutes.login} element={<Login />} />
        <Route element={<PrivateRoutes isAuth={false} />}>
          <Route path={CRoutes.dashboard} element={<h1>Holaaaaa</h1>} />
        </Route>
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
