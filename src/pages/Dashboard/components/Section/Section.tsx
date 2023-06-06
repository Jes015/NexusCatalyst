import { AddIcon } from '@src/components/Icons'
import { SectionItemApp, SectionItemIntegrations } from '@src/pages/Dashboard/components'
import { CSectionDirection, CSectionType } from '@src/pages/Dashboard/constants/'
import { type TSections } from '@src/pages/Dashboard/types/Section.types'
import { type IItem } from '@src/types'
import { Suspense, lazy, useState } from 'react'
import styles from './section.module.css'
const Window = lazy(() => import('@src/components/Window/Window'))
const SectionForm = lazy(() => import('@src/pages/Dashboard/components/SectionForm/SectionForm'))

interface props {
  itemsData: IItem[]
  name: TSections
  className: string
  direction: typeof CSectionDirection[keyof typeof CSectionDirection]
  type: typeof CSectionType[keyof typeof CSectionType]
  showItemLogo: boolean
}

export const Section = ({ itemsData, name, className, direction, type, showItemLogo }: props) => {
  console.log()
  const [isWindowVisible, setWindowVisible] = useState(false)

  const handleOnClick = () => {
    setWindowVisible(true)
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
            <Window setWindowVisible={setWindowVisible} title={name}>
              {<SectionForm sectionName={name} />}
            </Window>
          }
        </Suspense>
        {itemsData != null && itemsData.length !== 0 &&
          Object.entries(itemsData).map(([key, item]) => {
            return type === CSectionType.App ? <SectionItemApp sectionName={name} key={key} item={item} showLogo={showItemLogo} /> : <SectionItemIntegrations sectionName={name} key={key} item={item} showLogo={showItemLogo} />
          })
        }
        {itemsData == null && <span className={styles['section__not-found-message']}>Items not found</span>}
        {itemsData != null && itemsData.length === 0 && <span className={styles['section__not-found-message']}>No items added</span>}
      </main>
    </section>
  )
}
