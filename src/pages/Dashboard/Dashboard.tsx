import { useAuthContext } from '../../contexts'
import { Section } from './components/Section/'

import styles from './dashboard.module.css'

const Dashboard = () => {
  const { logOutUser } = useAuthContext()
  return (
        <div className={styles.dashboard}>
            <Section name='To Do' className={styles.toDo} />
            <Section name='Integrations' className={styles.integrations} />
            <Section name='Recommended Apps' className={styles.recommendedApps} />
        </div>
  )
}

export default Dashboard
