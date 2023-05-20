import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CRoutes } from '../constants'
import { PrivateRoutes } from './'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CRoutes.login} element={<h1>Logiiiiiiiin</h1>} />
        <Route element={<PrivateRoutes isAuth={false} />}> 
          <Route path={CRoutes.dashboard} element={<h1>Holaaaaa</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
