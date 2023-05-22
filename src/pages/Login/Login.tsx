import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { CardLayout, Form } from '../../components'
import { CRoutes } from '../../constants'

const Login = () => {
  const login = () => {
    toast('Hablalo pa')
    return 'safsd'
  }

  return (
    <CardLayout>
      <Form formTitle='Nexus Catalyst' buttonName='Login' onClickButton={login}>
        <span>Or <Link to={CRoutes.register}>register</Link></span>
      </Form>
    </CardLayout>
  )
}

export default Login
