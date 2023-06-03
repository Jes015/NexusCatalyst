import { Form } from '@src/components/'
import { CRoutes } from '@src/constants'
import { useAuthContext } from '@src/contexts'
import { CardLayout } from '@src/layouts'
import { type FormDataAdapted, type IInputs } from '@src/types'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const CInputs: IInputs = {
  email: {
    name: 'Email',
    type: 'email'
  },
  password: {
    name: 'Password',
    type: 'password'
  }
}

const Register = () => {
  const { registerUser } = useAuthContext()
  const navigate = useNavigate()

  const handleOnSumbitRegister = (formData: FormDataAdapted) => {
    const email = formData[CInputs.email.name]
    const password = formData[CInputs.password.name]

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
      <Form formTitle='Nexus Catalyst' buttonName='Register' onSumbit={handleOnSumbitRegister} inputsData={CInputs} />
      <span>Or <Link to={CRoutes.index}>login</Link></span>
    </CardLayout>
  )
}

export default Register
