import { SectionItemApp, SectionItemIntegrations } from './components'
import { Section } from './components/Section/'
import { CSection } from './consts/Section.const'

import styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Section name='Home' className={styles.home} type={CSection.App}>
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
      <Section name='Integrations' className={styles.integrations} type={CSection.Text}>
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
      </Section>
      <Section name='Recommended Apps' className={styles.recommendedApps} type={CSection.Text}>
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
        <SectionItemIntegrations title='Facebook' description='https://www.facebook.com' />
      </Section>
      <Section name='To Do' className={styles.todo} type={CSection.Text}>
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
