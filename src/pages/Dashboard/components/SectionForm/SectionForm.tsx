import { Form } from '@src/components'
import { type TSections } from '@src/pages/Dashboard/types/Section.types'
import { addItem } from '@src/services'
import { type FormDataAdapted, type IInputs, type IItem } from '@src/types'
import { toast } from 'sonner'

interface props {
  sectionName: TSections
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

const SectionForm = ({ sectionName }: props) => {
  const handleOnSumbit = (formData: FormDataAdapted) => {
    const item: IItem = {
      name: formData[CInputs.name.name],
      url: formData[CInputs.url.name],
      description: formData[CInputs.description.name]
    }

    addItem(item, sectionName)
      .then(() => {
        toast.success('Data added')
      })
      .catch((err) => {
        toast.error(err, { style: { background: '#f05a5a', border: 'none' } })
      })
  }
  return (
          <Form onSumbit={handleOnSumbit} formTitle={sectionName} buttonName='Add item' inputsData={CInputs} />
  )
}

export default SectionForm
