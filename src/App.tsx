import 'winbox/dist/css/themes/modern.min.css'
import 'winbox/dist/css/winbox.min.css'
import { Background } from './components'
import { AuthContextProvider } from './contexts'
import { Routing } from './routing'
import './styles/Global.css'

function App () {
  return (
    <>
    <AuthContextProvider>
      <>
        <Routing />
        <Background />
      </>
    </AuthContextProvider>
    </>
  )
}

export default App
