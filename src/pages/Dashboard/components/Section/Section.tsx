import { CSection } from '../../consts/Section.const'

import styles from './section.module.css'

interface props {
  name: string
  className: string
  type: typeof CSection[keyof typeof CSection]
  children: React.ReactNode
}

export const Section = ({ name, className, type, children }: props) => {
  return (
    <section className={[styles.section, className].join(' ')}>
      <header className={styles.section__header}>
        <h3>{name}</h3>
      </header>
      <main className={
        [
          styles.section__main,
          (type === CSection.App)
            ? styles['section__main-row']
            : styles['section__main-column']
        ].join(' ')
      }>
        {children}
      </main>
    </section>
  )
}
