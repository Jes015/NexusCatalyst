import { Link } from 'react-router-dom'
import { CardLayout, Form } from '../../components/'
import { CRoutes } from '../../constants'

const Register = () => {
  return (
        <CardLayout>
            <Form formTitle='Nexus Catalyst' buttonName='Register' onClickButton={() => { return 'a' }}>
            <span>Or <Link to={CRoutes.index}>login</Link></span>
            </Form>
        </CardLayout>
  )
}

export default Register
