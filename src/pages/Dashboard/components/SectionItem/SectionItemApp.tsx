import { RemoveIcon } from '@src/components/Icons'
import { type IItem } from '@src/types'
import { toast } from 'sonner'
import styles from './sectionItemApp.module.css'

interface ISectionItemAppProps {
  item: IItem
  showLogo: boolean
}

export const SectionItemApp = ({ item, showLogo }: ISectionItemAppProps) => {
  const handleOnClickToDelete = () => {
    toast.success(`${item.name} deleted`)
  }
  return (
    <div title={item.description} className={styles.sectionItem}>
      <a href={item.url} target='_blank' rel='noreferrer'>
        <header className={styles.sectionItem__Header}>
          {
            showLogo
              ? <img className={styles.sectionItem__Image} src={`https://logo.clearbit.com/${item.url}?size=400`} />
              : <span className={styles.sectionItem__Title}>{item.name}</span>
          }
        </header>
        <footer className={styles.sectionItem__Footer}>
          {
            showLogo &&
            <span>{item.name}</span>
          }
        </footer>
      </a>
      <button onClick={handleOnClickToDelete} className={styles.sectionItem__closeButton}>
        <RemoveIcon height='1.4em' width='1.4em' />
      </button>
    </div >
  )
}
