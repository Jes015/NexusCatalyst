import '@/App.css'
import WinBox from 'react-winbox'
import 'winbox/dist/css/themes/modern.min.css'
import 'winbox/dist/css/winbox.min.css'

function App () {
  return (
    <>
      <WinBox
        title='hola'
        className='modern'
      >
        <h1>Hols</h1>
      </WinBox>
    </>
  )
}

export default App
