import { AddIcon } from '../../../../components/Icons'
import { CSectionDirection } from '../../consts/Section.const'

import styles from './section.module.css'

interface props {
  name: string
  className: string
  direction: typeof CSectionDirection[keyof typeof CSectionDirection]
  children: React.ReactNode
}

export const Section = ({ name, className, direction, children }: props) => {
  return (
    <section className={[styles.section, className].join(' ')}>
      <header className={styles.section__header}>
        <h3>{name}</h3>
        <button style={{ backgroundColor: 'transparent' }}>
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
        {children}
      </main>
    </section>
  )
}
