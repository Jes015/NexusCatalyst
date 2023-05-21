import { Link } from 'react-router-dom'
import { CardLayout, Form } from '../../components'
import { CRoutes } from '../../constants'

export const Login = () => {
  const login = () => {
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
