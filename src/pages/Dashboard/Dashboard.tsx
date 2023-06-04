import { Section, SectionItemApp, SectionItemIntegrations } from '@src/pages/Dashboard/components'
import { CSectionDirection, CSectionsName } from '@src/pages/Dashboard/constants/'

import styles from './dashboard.module.css'

const Sections = {
  [CSectionsName.Home]: {
    name: CSectionsName.Home,
    className: styles.home,
    direction: CSectionDirection.Row
  },
  [CSectionsName.Integrations]: {
    name: CSectionsName.Integrations,
    className: styles.integrations,
    direction: CSectionDirection.Column
  },
  [CSectionsName.RecommendedApps]: {
    name: CSectionsName.RecommendedApps,
    className: styles.recommendedApps,
    direction: CSectionDirection.Column
  },
  [CSectionsName.ToDo]: {
    name: CSectionsName.ToDo,
    className: styles.todo,
    direction: CSectionDirection.Column
  }
} as const

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Section name={Sections.Home.name} className={Sections.Home.className} direction={Sections.Home.direction} >
        <SectionItemApp title='Facebook' logo={true} url='https://www.facebook.com' />
        <SectionItemApp title='Youtube' logo={true} url='https://chat.openai.com' />
        <SectionItemApp title='Facebook' logo={true} url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' logo={true} url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' logo={true} url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' logo={true} url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' logo={true} url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' logo={true} url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' logo={true} url='https://www.facebook.com' />
      </Section>
      <Section name={Sections.Integrations.name} className={Sections.Integrations.className} direction={Sections.Integrations.direction}>
        <SectionItemIntegrations title='Dev vault' description='Tools for web developers' url='https://dev-vault-ochre.vercel.app/'/>
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
      </Section>
      <Section name={Sections.RecommendedApps.name} className={Sections.RecommendedApps.className} direction={Sections.RecommendedApps.direction}>
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
      </Section>
      <Section name={CSectionsName.ToDo} className={styles.todo} direction={CSectionDirection.Column}>
        <SectionItemApp title='Facebook' url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' url='https://www.facebook.com' />
        <SectionItemApp title='Facebook' url='https://www.facebook.com' />
      </Section>
    </div>
  )
}

export default Dashboard
