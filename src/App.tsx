// Custom components
import { Toaster } from 'sonner'
import { Background } from './components'
import { AuthContextProvider } from './contexts'
import { Routing } from './routing'

// Styles
import './styles/Global.css'
import './styles/winbox.css'

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
