import { Input } from '@src/components/'
import { type IInput } from '@src/types'
import { toast } from 'sonner'
import styles from './Form.module.css'

interface props {
  formTitle: string
  buttonName: string
  onSumbit: (formData: FormData) => void
  inputsData: IInput[]
}

export const Form = ({ formTitle, buttonName, onSumbit, inputsData }: props) => {
  const handleOnSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    let error = false
    formData.forEach((input) => {
      if (input === '') {
        error = true
      }
    })

    if (error) {
      toast.error('Every field is needed', { style: { background: '#f05a5a' } })
    } else {
      onSumbit(formData)
    }
  }

  return (
    <section className={styles.form}>
      <header>
        <h2 className={styles.form__title}>{formTitle}</h2>
      </header>
      <main>
        <form onSubmit={handleOnSumbit} className={styles.form__form}>
          {
            inputsData.map((inputData) => (
              <Input key={inputData.name} data={inputData} />
            ))
          }
          <button className={styles.form__button}>{buttonName}</button>
        </form>
      </main>
    </section>
  )
}
