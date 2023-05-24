import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { CardLayout, Form } from '../../components'
import { CRoutes } from '../../constants'
import { useAuthContext } from '../../contexts'

const Login = () => {
  const { signIn } = useAuthContext()
  const handleOnClickLogin = (user: string, password: string) => {
    signIn(user, password)
      .then((res) => {
        toast(<p>{ JSON.stringify(res) }</p>)
      })
      .catch((err) => {
        toast(err.code, { style: { background: '#f05a5a' } })
      })
  }

  return (
    <CardLayout>
      <Form formTitle='Nexus Catalyst' buttonName='Login' onClickButton={handleOnClickLogin}>
        <span>Or <Link to={CRoutes.register}>register</Link></span>
      </Form>
    </CardLayout>
  )
}

export default Login
