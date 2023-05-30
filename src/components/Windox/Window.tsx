import WinBox from 'react-winbox'

interface props {
  title: string
  url: string
  setWindowVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Window = ({ title, url, setWindowVisible }: props) => {
  const handleWindowOnClose = () => {
    setWindowVisible(false)
  }
  return (
    <WinBox max onClose={handleWindowOnClose} title={title} icon={`${url}/favicon.ico`} url={url} />
  )
}

export default Window
