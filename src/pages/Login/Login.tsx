import { Form, Input } from '@src/components'
import { CRoutes } from '@src/constants'
import { useAuthContext } from '@src/contexts'
import { CardLayout } from '@src/layouts'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const CInputs = {
  Email: 'Email',
  Password: 'Password'
}

const Login = () => {
  const { logInUser } = useAuthContext()

  const navigate = useNavigate()

  const handleOnClickLogin = (formData: FormData) => {
    const email = formData.get(CInputs.Email) as string
    const password = formData.get(CInputs.Password) as string
    logInUser(email, password)
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
      <Form formTitle='Nexus Catalyst' buttonName='Login' onSumbit={handleOnClickLogin}>
        <Input name={CInputs.Email} type={CInputs.Email} />
        <Input name={CInputs.Password} type={CInputs.Password} />
      </Form>
      <span>Or <Link to={CRoutes.register}>register</Link></span>
    </CardLayout>
  )
}

export default Login
