import { Suspense, useState } from 'react'
import WinBox from 'react-winbox'
import styles from './sectionItem.module.css'

// const WinBox = lazy(async () => await import('react-winbox'))

interface ISectionItemProps {
  title: string
  description: string
}

const SectionItemIntegrations = ({ title, description }: ISectionItemProps) => {
  const [isWindowVisible, setWindowVisible] = useState(false)
  const [isOpenWindow, setOpenWindow] = useState(false)

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event)
    setWindowVisible(true)
  }

  const handleWindowOnClose = () => {
    setWindowVisible(false)
  }
  return (
    <div className={styles.sectionItem} onClick={handleOnClick}>
      <header className={styles.sectionItem__Header}>
        <span>{title}</span>
      </header>
      <main>
          {isWindowVisible &&
          <Suspense fallback={<span>Loading integration</span>}>
            <WinBox max onClose={handleWindowOnClose} title={title} icon='https://dev-vault-ochre.vercel.app/favicon.ico' url='https://dev-vault-ochre.vercel.app/' />
          </Suspense>
          }
      </main>
    </div>
  )
}

interface ISectionItemAppProps {
  title: string
  url: string
  logo?: boolean
}

const SectionItemApp = ({ title, url, logo = false }: ISectionItemAppProps) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <div className={styles.sectionItem}>
        <header className={styles.sectionItem__Header}>
          {
            logo
              ? <img style={{ width: '50px' }} src={`https://logo.clearbit.com/${url}?size=400`} />
              : <span style={{ fontSize: '0.7em', fontWeight: 'bolder' }}>{title}</span>
          }
        </header>
        <footer className={styles.sectionItem__Footer}>
          {
            logo &&
            <span style={{ fontSize: '0.7em', fontWeight: 'bolder' }}>{title}</span>
          }
        </footer>
      </div>
    </a>
  )
}

export { SectionItemIntegrations, SectionItemApp }
