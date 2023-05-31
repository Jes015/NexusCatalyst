import { Form, Input } from '@src/components/'
import { CRoutes } from '@src/constants'
import { useAuthContext } from '@src/contexts'
import { CardLayout } from '@src/layouts'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const CInputs = {
  Email: 'Email',
  Password: 'Password'
}

const Register = () => {
  const { registerUser } = useAuthContext()
  const navigate = useNavigate()

  const handleOnClickRegister = (formData: FormData) => {
    const email = formData.get(CInputs.Email) as string
    const password = formData.get(CInputs.Password) as string
    registerUser(email, password)
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
      <Form formTitle='Nexus Catalyst' buttonName='Register' onSumbit={handleOnClickRegister}>
        <Input name='Email' type='email' />
        <Input name='Password' type='password' />
      </Form>
      <span>Or <Link to={CRoutes.index}>login</Link></span>
    </CardLayout>
  )
}

export default Register
