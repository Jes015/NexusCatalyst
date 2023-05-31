import { RemoveIcon } from '@src/components/Icons'
import styles from './sectionItemApp.module.css'

interface ISectionItemAppProps {
  title: string
  url: string
  logo?: boolean
}

export const SectionItemApp = ({ title, url, logo = false }: ISectionItemAppProps) => {
  return (
    <div className={styles.sectionItem}>
      <a href={url} target='_blank' rel='noreferrer'>
        <header className={styles.sectionItem__Header}>
          {
            logo
              ? <img className={styles.sectionItem__Image} src={`https://logo.clearbit.com/${url}?size=400`} />
              : <span className={styles.sectionItem__Title}>{title}</span>
          }
        </header>
        <footer className={styles.sectionItem__Footer}>
          {
            logo &&
            <span>{title}</span>
          }
        </footer>
      </a>
      <button className={styles.sectionItem__closeButton}>
        <RemoveIcon height='1.4em' width='1.4em' />
      </button>
    </div >
  )
}
