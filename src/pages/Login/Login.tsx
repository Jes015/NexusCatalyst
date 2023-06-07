import { CRoutes } from '@src/constants'
import { useAuthContext } from '@src/contexts'
import { googleProvider } from '@src/firebase/firebase.config'
import { CardLayout } from '@src/layouts'
import { type AuthProvider } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import styles from './login.module.css'

const LoginOptions = {
  google: {
    name: 'Google',
    provider: googleProvider
  }
}

const Login = () => {
  const { logInUser } = useAuthContext()

  const navigate = useNavigate()

  const handleOnSumbitLogin = (provider: AuthProvider) => () => {
    logInUser(provider)
      .then(res => {
        toast.success(res as string)
        navigate(CRoutes.dashboard)
      })
      .catch(err => {
        toast.error(err.code, { style: { background: '#f05a5a', border: 'none' } })
      })
  }

  return (
    <CardLayout>
      <div className={styles.login}>
        <header className={styles.login__header}>
          <h1>Nexus Catalyst</h1>
        </header>
        <main className={styles.login__main}>
          <span>Login with </span>
          <div className={styles['login__buttons-container']}>
            {Object.entries(LoginOptions).map(([key, loginOption]) => {
              return <button className={styles.login__button} key={key} onClick={handleOnSumbitLogin(loginOption.provider)}>{loginOption.name}</button>
            })}
          </div>
        </main>
        <footer>
          <a href='https://github.com/Jes015/NexusCatalyst' target='_blank'>Github</a>
        </footer>
      </div>
    </CardLayout>
  )
}

export default Login
