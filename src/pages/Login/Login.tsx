import { Link } from 'react-router-dom'
import { CRoutes } from '../../constants'
import styles from './Login.module.css'

export const Login = () => {
  const handleOnSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className={styles.login}>
      <header>
        <h2 className={styles.login__title}>LOGIN</h2>
      </header>
      <main>
        <form onSubmit={handleOnSumbit} className={styles.login__form}>
          <div className={styles.login__formGroup}>
            <label htmlFor='user'>User</label>
            <input id='user' />
          </div>
          <div className={styles.login__formGroup}>
            <label htmlFor='password'>Password</label>
            <input id='password' />
          </div>
            <button>Login</button>
        </form>
      </main>
      <footer className={styles.login__footer}>
        <span>Or <Link to={CRoutes.register}>register</Link></span>
      </footer>
    </section>
  )
}
