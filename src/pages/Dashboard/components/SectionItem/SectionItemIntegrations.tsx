import { Suspense, lazy, useState } from 'react'
import { RemoveIcon } from '../../../../components/Icons'
import styles from './sectionItemIntegrations.module.css'

const Window = lazy(async () => await import('../../../../components/Window/Window'))

interface ISectionItemProps {
  title: string
  url: string
  description: string
}

export const SectionItemIntegrations = ({ title, url, description }: ISectionItemProps) => {
  const [isWindowVisible, setWindowVisible] = useState(false)

  const handleOnClick = () => {
    setWindowVisible(true)
  }

  return (
    <div className={styles.sectionItem}>
      <div onClick={handleOnClick}>
        <main className={styles.sectionItem__Main}>
          <img className={styles.sectionItem__Image} src={`${url}/favicon.ico`} />
          <div>
            <span className={styles.sectionItem__Title}>{title}</span>
            <p className={styles.sectionItem__Description}>{description}</p>
          </div>
          {isWindowVisible &&
            <Suspense fallback={<h1>Loading integration</h1>}>
              <Window setWindowVisible={setWindowVisible} title={title} url={url} />
            </Suspense>
          }
        </main>
      </div>
      <button className={styles.sectionItem__closeButton}>
        <RemoveIcon height='1.4em' width='1.4em' />
      </button>
    </div>
  )
}
