import { SectionItemApp, SectionItemIntegrations } from './components'
import { Section } from './components/Section/'
import { CSectionDirection, CSectionsName } from './consts/Section.const'

import styles from './dashboard.module.css'

// title='Dev Vault' url='https://dev-vault-ochre.vercel.app/'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Section name={CSectionsName.Home} className={styles.home} direction={CSectionDirection.Row}>
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
      <Section name={CSectionsName.Integrations} className={styles.integrations} direction={CSectionDirection.Column}>
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
        <SectionItemIntegrations description='Description' title='Facebook' url='https://www.facebook.com' />
      </Section>
      <Section name={CSectionsName.RecommendedApps} className={styles.recommendedApps} direction={CSectionDirection.Column}>
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
