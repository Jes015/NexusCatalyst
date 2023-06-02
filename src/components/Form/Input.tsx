import { type IInput } from '@src/types'
import styles from './Form.module.css'

interface props {
  data: IInput
}

export const Input = ({ data }: props) => {
  return (
    <div className={styles.form__group}>
        <label htmlFor={data.name}>{data.name}</label>
        <input name={data.name} id={data.name} type={data.type} />
    </div>
  )
}
