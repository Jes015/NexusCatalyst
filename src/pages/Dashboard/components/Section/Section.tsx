import styles from './section.module.css'

interface props {
  name: string
  className: string
}

export const Section = ({ name, className }: props) => {
  return (
        <section className={[styles.section, className].join(' ')}>
            <header className={styles.section__header}>
                <h3>{name}</h3>
            </header>
            <main>
                <div>
                    <header>
                        <h5>Dweb</h5>
                    </header>
                    <footer>5: PM</footer>
                </div>
            </main>
            <footer>
                <span>Section footer</span>
            </footer>
        </section>
  )
}
