// Custom components
import { Toaster } from 'sonner'
import { Background } from './components'
import { AuthContextProvider } from './contexts'
import { Routing } from './routing'

// Styles
import 'winbox/dist/css/themes/modern.min.css'
import 'winbox/dist/css/winbox.min.css'
import './styles/Global.css'

function App () {
  return (
    <>
      <AuthContextProvider>
        <>
          <Routing />
          <Toaster visibleToasts={3} toastOptions={{ style: { background: 'var(--body-secondary-background)', color: 'inherit', borderColor: 'var(--button-primary-background)' } }}/>
          <Background />
        </>
      </AuthContextProvider>
    </>
  )
}

export default App
