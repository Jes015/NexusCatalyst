// Styles
import styles from './Form.module.css'

// Custom components
import { toast } from 'sonner'

interface props {
  formTitle: string
  buttonName: string
  onSumbit: (formData: FormData) => void
  children: React.ReactNode
}

export const Form = ({ formTitle, buttonName, onSumbit, children }: props) => {
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
          {children}
          <button>{buttonName}</button>
        </form>
      </main>
    </section>
  )
}
