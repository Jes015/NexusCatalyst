import { useAuthContext } from '@src/contexts'
import { Section } from '@src/pages/Dashboard/components'
import { CSectionDirection, CSectionType, CSectionsName } from '@src/pages/Dashboard/constants/'
import { useItemsData } from '@src/pages/Dashboard/hooks'
import styles from './dashboard.module.css'

const Sections = {
  [CSectionsName.Home]: {
    name: CSectionsName.Home,
    className: styles.home,
    type: CSectionType.App,
    direction: CSectionDirection.Row,
    showIcons: true
  },
  [CSectionsName.Integrations]: {
    name: CSectionsName.Integrations,
    className: styles.integrations,
    type: CSectionType.Integration,
    direction: CSectionDirection.Column,
    showIcons: false
  },
  [CSectionsName.RecommendedApps]: {
    name: CSectionsName.RecommendedApps,
    className: styles.recommendedApps,
    type: CSectionType.Integration,
    direction: CSectionDirection.Column,
    showIcons: true
  },
  [CSectionsName.ToDo]: {
    name: CSectionsName.ToDo,
    className: styles.todo,
    type: CSectionType.App,
    direction: CSectionDirection.Column,
    showIcons: false
  }
} as const

const Dashboard = () => {
  const { logOutUser } = useAuthContext()
  const { itemsData } = useItemsData()

  return (
    <>
      <div className={styles.dashboard}>
        {itemsData != null
          ? Object.entries(Sections).map(([key, value]) => {
            return <Section itemsData={itemsData[value.name]} key={key} name={value.name} className={value.className} direction={value.direction} type={value.type} showItemLogo={value.showIcons} />
          })
          : <h1>Loading sections</h1>
        }
      </div>
      <div>
        <button onClick={() => { logOutUser() }}>Logout</button>
      </div>
    </>
  )
}

export default Dashboard
