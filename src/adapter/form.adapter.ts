import { type FormDataAdapted } from '@src/types'

const adaptFormData = (formData: FormData) => {
  let dataAdapted: FormDataAdapted = {}

  formData.forEach((value, key) => {
    dataAdapted = {
      ...dataAdapted,
      [key]: value as string
    }
  })

  return dataAdapted
}

export { adaptFormData }
