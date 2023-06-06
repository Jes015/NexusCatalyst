import { AddIcon } from '@src/components/Icons'
import { SectionItemApp, SectionItemIntegrations } from '@src/pages/Dashboard/components'
import { CSectionDirection, CSectionType, type CSectionsName } from '@src/pages/Dashboard/constants/'
import { getItems } from '@src/services'
import { type TItems } from '@src/types'
import { Suspense, lazy, useState } from 'react'
import styles from './section.module.css'
const Window = lazy(() => import('@src/components/Window/Window'))
const SectionForm = lazy(() => import('@src/pages/Dashboard/components/SectionForm/SectionForm'))

interface props {
  name: typeof CSectionsName[keyof typeof CSectionsName]
  className: string
  direction: typeof CSectionDirection[keyof typeof CSectionDirection]
  type: typeof CSectionType[keyof typeof CSectionType]
  showItemLogo: boolean
}

export const Section = ({ name, className, direction, type, showItemLogo }: props) => {
  const [itemsData, setItemsData] = useState<TItems>()
  const [isWindowVisible, setWindowVisible] = useState(false)

  const handleOnClick = () => {
    setWindowVisible(true)
    getItems('Home')
      .then(res => {
        setItemsData(res as TItems)
        console.log(typeof res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <section className={[styles.section, className].join(' ')}>
      <header className={styles.section__header}>
        <h3>{name}</h3>
        <button onClick={handleOnClick} style={{ backgroundColor: 'transparent' }}>
          <AddIcon height='1.5em' width='1.5em' />
        </button>
      </header>
      <main className={
        [
          styles.section__main,
          (direction === CSectionDirection.Row)
            ? styles['section__main-row']
            : styles['section__main-column']
        ].join(' ')
      }>
        <Suspense>
          {
            isWindowVisible &&
            <Window setWindowVisible={setWindowVisible} title='Holaaaaa'>
              {<SectionForm title={name} />}
            </Window>
          }
        </Suspense>
        {itemsData != null
          ? Object.entries(itemsData).map(([key, item]) => {
            return type === CSectionType.App ? <SectionItemApp key={key} item={item} showLogo={showItemLogo} /> : <SectionItemIntegrations key={key} item={item} showLogo={showItemLogo} />
          })
          : <h3>Items not found</h3>
        }
      </main>
    </section>
  )
}
