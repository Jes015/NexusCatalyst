import App from '@src/App'
import '@src/styles/normalize.css'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)
root.render(<App />)
