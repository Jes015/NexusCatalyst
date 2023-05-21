// Custom components
import { Login } from '../'
import { CardLayout } from '../../components/CardLayout'

// Styles
import styles from './Index.module.css'

export const Index = () => {
  return (
    <CardLayout>
      <div className={styles.index}>
      <div className={styles.index__wrap}>
        <section>
          <img src='/loginImage.webp' className={styles.index__image}/>
        </section>
        <Login />
      </div>
    </div>
    </CardLayout>
  )
}
