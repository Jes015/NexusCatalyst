import styles from './Form.module.css'

interface props {
  name: string
  type: React.HTMLInputTypeAttribute
}

export const Input = ({ name, type }: props) => {
  return (
    <div className={styles.form__group}>
        <label htmlFor={name}>{name}</label>
        <input name={name} id={name} type={type} />
    </div>
  )
}
