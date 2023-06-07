import { RemoveIcon } from '@src/components/Icons'
import { type TSections } from '@src/pages/Dashboard/types/Section.types'
import { removeItem } from '@src/services'
import { type IItem } from '@src/types'
import { Suspense, lazy, useState } from 'react'
import { toast } from 'sonner'
import styles from './sectionItemIntegrations.module.css'

const Window = lazy(async () => await import('@src/components/Window/Window'))

interface ISectionItemProps {
  sectionName: TSections
  item: IItem
  showLogo: boolean
}

export const SectionItemIntegrations = ({ sectionName, item, showLogo }: ISectionItemProps) => {
  const [isWindowVisible, setWindowVisible] = useState(false)

  const handleOnClickToOpenIntegration = () => {
    setWindowVisible(true)
  }

  const handleOnClickToDelete = () => {
    removeItem(item, sectionName)
      .then(() => {
        toast.success('Data deleted')
      })
      .catch((err) => {
        toast.error(err, { style: { background: '#f05a5a', border: 'none' } })
      })
  }

  return (
    <div className={styles.sectionItem}>
      <div onClick={handleOnClickToOpenIntegration}>
        <main className={styles.sectionItem__Main}>
          {showLogo && <img className={styles.sectionItem__Image} src={`https://logo.clearbit.com/${item.url}?size=400`} />}
          <div>
            <span className={styles.sectionItem__Title}>{item.name}</span>
            <p className={styles.sectionItem__Description}>{item.description}</p>
          </div>
          {isWindowVisible &&
            <Suspense fallback={<h1>Loading integration</h1>}>
              <Window setWindowVisible={setWindowVisible} title={item.name} url={item.url} max={true} />
            </Suspense>
          }
        </main>
      </div>
      <button onClick={handleOnClickToDelete} className={styles.sectionItem__closeButton}>
        <RemoveIcon height='1.4em' width='1.4em' />
      </button>
    </div>
  )
}
