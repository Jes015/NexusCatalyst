import { Form } from '@src/components'
import { type CSectionsName } from '@src/pages/Dashboard/constants/'
import { type IInput } from '@src/types'

interface props {
  title: typeof CSectionsName[keyof typeof CSectionsName]
}

const CInputs: IInput[] = [
  {
    name: 'Name',
    type: 'text'
  },
  {
    name: 'Description',
    type: 'text'
  },
  {
    name: 'Url',
    type: 'url'
  }
]

const SectionForm = ({ title }: props) => {
  const handleOnSumbit = (formData: FormData) => {
    let dataToSend = {}
    formData.forEach((element) => {
      dataToSend = {
        ...dataToSend, element
      }
    })
  }
  return (
        <Form onSumbit={handleOnSumbit} formTitle={`Add new item to ${title}`} buttonName='Add item' inputsData={CInputs} />
  )
}

export default SectionForm
