import { adaptFormData } from '@src/adapter'
import { Input } from '@src/components/'
import { type FormDataAdapted, type IInputs } from '@src/types'
import { toast } from 'sonner'
import styles from './Form.module.css'

interface props {
  formTitle: string
  buttonName: string
  onSumbit: (formData: FormDataAdapted) => void
  inputsData: IInputs
}

export const Form = ({ formTitle, buttonName, onSumbit, inputsData }: props) => {
  const handleOnSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    // Someone who wants to make this more functional. It's ok <3
    let error = false
    for (const [, value] of formData) {
      if (value === '') {
        error = true
        break
      }
    }

    if (error) {
      toast.error('Every field is needed', { style: { background: '#f05a5a', border: 'none' } })
    } else {
      const dataAdapted = adaptFormData(formData)
      onSumbit(dataAdapted)
      form.reset()
      toast.success('Data sended')
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
            Object.entries(inputsData).map(([, inputData]) => (
              <Input key={inputData.name} data={inputData} />
            ))
          }
          <button className={styles.form__button}>{buttonName}</button>
        </form>
      </main>
    </section>
  )
}
