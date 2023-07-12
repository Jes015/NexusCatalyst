import WinBox from 'react-winbox'

interface props {
  title: string
  url?: string
  children?: React.ReactElement
  setWindowVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Window = ({ title, url = '', children, setWindowVisible }: props) => {
  const handleWindowOnClose = () => {
    setWindowVisible(false)
  }

  return (
    <WinBox max onClose={handleWindowOnClose} title={title} icon={`${url}/favicon.ico`} {...(url !== '' ? { url } : { children })} />
  )
}

export default Window
