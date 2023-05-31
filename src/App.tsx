import { Background } from '@src/components'
import { AuthContextProvider } from '@src/contexts'
import { Routing } from '@src/routing'
import '@src/styles/Global.css'
import '@src/styles/winbox.css'
import { Toaster } from 'sonner'

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
