import styles from './sectionItem.module.css'

interface ISectionItemAppProps {
  title: string
  url: string
  logo?: boolean
}

export const SectionItemApp = ({ title, url, logo = false }: ISectionItemAppProps) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <div className={styles.sectionItem}>
        <header className={styles.sectionItem__Header}>
          {
            logo
              ? <img style={{ width: '50px' }} src={`https://logo.clearbit.com/${url}?size=400`} />
              : <span style={{ fontSize: '0.7em', fontWeight: 'bolder' }}>{title}</span>
          }
        </header>
        <footer className={styles.sectionItem__Footer}>
          {
            logo &&
            <span style={{ fontSize: '0.7em' }}>{title}</span>
          }
        </footer>
      </div>
    </a>
  )
}
