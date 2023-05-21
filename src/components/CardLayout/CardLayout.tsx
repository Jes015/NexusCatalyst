import styles from './cardLayout.module.css'

interface props {
  children: JSX.Element
}

export const CardLayout = ({ children }: props) => {
  return <div className={styles.cardLayout__wrap}>{children}</div>
}
