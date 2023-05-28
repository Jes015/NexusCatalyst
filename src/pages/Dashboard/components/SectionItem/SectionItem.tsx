import { CSection } from '../../consts/Section.const'

import styles from './sectionItem.module.css'

interface ISectionItemAppProps {
  title: string
  url: string
  type: typeof CSection[keyof typeof CSection]
}

const SectionItem = ({ title, url, type }: ISectionItemAppProps) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <div className={styles.sectionItem}>
        <header className={styles.sectionItem__Header}>
        {type === CSection.App ? <img style={{ width: '50px' }} src={`https://logo.clearbit.com/${url}?size=400`} /> : <span>{title}</span>}
        </header>
        <footer className={styles.sectionItem__Footer}>
          {type === CSection.App && <span style={{ fontSize: '0.7em', fontWeight: 'bolder' }}>{title}</span>}
        </footer>
      </div>
    </a>
  )
}

const SectionItemApp = () => {
  return (
    <div>
      <header>
        <h5>Dweb</h5>
      </header>
      <footer>5: PM</footer>
    </div>
  )
}

export { SectionItem, SectionItemApp }
