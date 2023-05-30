import { Suspense, lazy, useState } from 'react'
import styles from './sectionItem.module.css'

const Window = lazy(async () => await import('../../../../components/Windox/Window'))

interface ISectionItemProps {
  title: string
  url: string
}

export const SectionItemIntegrations = ({ title, url }: ISectionItemProps) => {
  const [isWindowVisible, setWindowVisible] = useState(false)

  const handleOnClick = () => {
    setWindowVisible(true)
  }

  return (
    <div className={styles.sectionItem} onClick={handleOnClick}>
      <header className={styles.sectionItem__Header}>
        <img style={{ width: '1.4em' }} src={`${url}/favicon.ico`} />
        <span>{title}</span>
      </header>
      <main>
        {isWindowVisible &&
          <Suspense fallback={<span>Loading integration</span>}>
            <Window setWindowVisible={setWindowVisible} title={title} url={url} />
          </Suspense>
        }
      </main>
    </div>
  )
}
