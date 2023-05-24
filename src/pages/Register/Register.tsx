import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { CardLayout, Form } from '../../components/'
import { CRoutes } from '../../constants'
import { useAuthContext } from '../../contexts'

const Register = () => {
  const { createUser } = useAuthContext()

  const handleOnClickRegister = (user: string, password: string) => {
    createUser(user, password)
      .then((res) => {
        toast(<p>{ JSON.stringify(res) }</p>)
      })
      .catch((err) => {
        toast.error(JSON.stringify(err))
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
