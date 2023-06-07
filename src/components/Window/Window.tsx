import WinBox from 'react-winbox'

interface props {
  title: string
  width?: string
  height?: string
  max?: boolean
  url?: string
  children?: React.ReactElement
  setWindowVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Window = ({ title, url = '', children, setWindowVisible, width, height, max }: props) => {
  const handleWindowOnClose = () => {
    setWindowVisible(false)
  }

  return (
    <WinBox max={max} width={width} height={height} onClose={handleWindowOnClose} title={title} icon={`${url}/favicon.ico`} {...(url !== '' ? { url } : { children })} />
  )
}

export default Window
