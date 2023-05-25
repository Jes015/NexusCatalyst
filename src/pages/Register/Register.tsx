// React Router Dom
import { Link, useNavigate } from 'react-router-dom'

// Custom components
import { toast } from 'sonner'
import { Form } from '../../components/'
import { CardLayout } from '../../layouts'

// Constants
import { CRoutes } from '../../constants'

// Context
import { useAuthContext } from '../../contexts'

const Register = () => {
  const { registerUser } = useAuthContext()
  const navigate = useNavigate()

  const handleOnClickRegister = (user: string, password: string) => {
    registerUser(user, password)
      .then((res) => {
        toast.success(res as string)
        console.log(res)
        navigate(CRoutes.dashboard)
      })
      .catch(err => {
        toast.error(err.code, { style: { background: '#f05a5a' } })
      })
  }

  return (
        <CardLayout>
            <Form formTitle='Nexus Catalyst' buttonName='Register' onClickButton={handleOnClickRegister}>
            <span>Or <Link to={CRoutes.index}>login</Link></span>
            </Form>
        </CardLayout>
  )
}

export default Register
