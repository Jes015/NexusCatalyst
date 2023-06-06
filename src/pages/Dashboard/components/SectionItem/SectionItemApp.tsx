import { RemoveIcon } from '@src/components/Icons'
import { type TSections } from '@src/pages/Dashboard/types/Section.types'
import { removeItem } from '@src/services'
import { type IItem } from '@src/types'
import { toast } from 'sonner'
import styles from './sectionItemApp.module.css'

interface ISectionItemAppProps {
  sectionName: TSections
  item: IItem
  showLogo: boolean
}

export const SectionItemApp = ({ sectionName, item, showLogo }: ISectionItemAppProps) => {
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
    <div title={item.description} className={styles.sectionItem}>
      <a href={item.url} target='_blank' rel='noreferrer'>
        <header className={styles.sectionItem__Header}>
          {
            showLogo
              ? <img className={styles.sectionItem__Image} src={`https://logo.clearbit.com/${item.url as string}?size=400`} />
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
