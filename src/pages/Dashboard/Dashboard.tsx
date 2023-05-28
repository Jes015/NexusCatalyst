import { useAuthContext } from '../../contexts'
import { SectionItem } from './components'
import { Section } from './components/Section/'
import { CSection } from './consts/Section.const'

import styles from './dashboard.module.css'

const Dashboard = () => {
  const { logOutUser } = useAuthContext()
  return (
    <div className={styles.dashboard}>
      <Section name='Home' className={styles.home} type={CSection.App}>
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Youtube' url='https://chat.openai.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.App} title='Facebook' url='https://www.facebook.com' />
      </Section>
      <Section name='Integrations' className={styles.integrations} type={CSection.Text}>
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
      </Section>
      <Section name='Recommended Apps' className={styles.recommendedApps} type={CSection.Text}>
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
      </Section>
      <Section name='juegos' className={styles.s} type={CSection.Text}>
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
        <SectionItem type={CSection.Text} title='Facebook' url='https://www.facebook.com' />
      </Section>
    </div>
  )
}

export default Dashboard
