// React router dom
import { Link, useNavigate } from 'react-router-dom'

// Custom components
import { toast } from 'sonner'
import { Form } from '../../components'
import { CardLayout } from '../../layouts'

// Constants
import { CRoutes } from '../../constants'

// Context
import { useAuthContext } from '../../contexts'

const Login = () => {
  const { logInUser } = useAuthContext()

  const navigate = useNavigate()
  const handleOnClickLogin = (user: string, password: string) => {
    logInUser(user, password)
      .then(res => {
        toast.success(res as string)
        navigate(CRoutes.dashboard)
      })
      .catch(err => {
        toast.error(err.code, { style: { background: '#f05a5a' } })
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
