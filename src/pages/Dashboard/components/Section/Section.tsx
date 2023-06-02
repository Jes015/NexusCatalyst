import { AddIcon } from '@src/components/Icons'
import { CSectionDirection, type CSectionsName } from '@src/pages/Dashboard/constants/'
import { Suspense, lazy, useState } from 'react'
import styles from './section.module.css'
const Window = lazy(() => import('@src/components/Window/Window'))
const SectionForm = lazy(() => import('@src/pages/Dashboard/components/SectionForm/SectionForm'))

interface props {
  name: typeof CSectionsName[keyof typeof CSectionsName]
  className: string
  direction: typeof CSectionDirection[keyof typeof CSectionDirection]
  children: React.ReactNode
  form: JSX.Element
}

export const Section = ({ name, className, direction, children }: props) => {
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
            <Window setWindowVisible={setWindowVisible} title='Holaaaaa'>
              {<SectionForm title={name} />}
            </Window>
          }
        </Suspense>
        {children}
      </main>
    </section>
  )
}
