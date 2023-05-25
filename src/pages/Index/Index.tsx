// Custom components
import { CardLayout } from '../../layouts/CardLayout'
import Login from '../Login/Login'

// Styles
import styles from './Index.module.css'

const Index = () => {
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

export default Index
