// Custom components
import { Login } from '../'

// Styles
import styles from './Index.module.css'

export const Index = () => {
  return (
    <div className={styles.index}>
      <div className={styles.index__wrap}>
        <section>
          <img src='/loginImage.webp' className={styles.index__image}/>
        </section>
        <Login />
      </div>
    </div>
  )
}
