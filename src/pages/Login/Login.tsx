import { Form } from '@src/components'
import { CRoutes } from '@src/constants'
import { useAuthContext } from '@src/contexts'
import { CardLayout } from '@src/layouts'
import { type IInput } from '@src/types'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const CInputs: IInput[] = [
  {
    name: 'Email',
    type: 'email'
  },
  {
    name: 'Password',
    type: 'password'
  }
]

const Login = () => {
  const { logInUser } = useAuthContext()

  const navigate = useNavigate()

  const handleOnSumbitLogin = (formData: FormData) => {
    const [CInputEmail, CInputPassword] = CInputs

    const email = formData.get(CInputEmail.name) as string
    const password = formData.get(CInputPassword.name) as string

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
      <Form formTitle='Nexus Catalyst' buttonName='Login' onSumbit={handleOnSumbitLogin} inputsData={CInputs} />
      <span>Or <Link to={CRoutes.register}>register</Link></span>
    </CardLayout>
  )
}

export default Login
