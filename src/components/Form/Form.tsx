// Styles
import styles from './Form.module.css'

interface props {
  formTitle: string
  buttonName: string
  onClickButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: JSX.Element
}

export const Form = ({ formTitle, buttonName, onClickButton, children }: props) => {
  const handleOnSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className={styles.form}>
      <header>
        <h2 className={styles.form__title}>{formTitle}</h2>
      </header>
      <main>
        <form onSubmit={handleOnSumbit} className={styles.form__form}>
          <div className={styles.form__group}>
            <label htmlFor='email'>Email</label>
            <input name='email' id='email' />
          </div>
          <div className={styles.form__group}>
            <label htmlFor='password'>Password</label>
            <input name='password' id='password' />
          </div>
          <button onClick={onClickButton}>{buttonName}</button>
        </form>
      </main>
      <footer className={styles.form__footer}>
        {children}
      </footer>
    </section>
  )
}
