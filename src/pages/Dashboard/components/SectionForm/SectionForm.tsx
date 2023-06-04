import { Form } from '@src/components'
import { CardLayout } from '@src/layouts'
import { type FormDataAdapted, type IInputs } from '@src/types'

interface props {
  title: string
}

const CInputs: IInputs = {
  name: {
    name: 'Name',
    type: 'text'
  },
  description: {
    name: 'Description',
    type: 'text'
  },
  url: {
    name: 'Url',
    type: 'url'
  }
}

const SectionForm = ({ title }: props) => {
  const handleOnSumbit = (formData: FormDataAdapted) => {
    console.log(formData[CInputs.name.name])
  }
  return (
        <CardLayout>
          <Form onSumbit={handleOnSumbit} formTitle={`Add new item to ${title}`} buttonName='Add item' inputsData={CInputs} />
        </CardLayout>
  )
}

export default SectionForm
