import { type HTMLInputTypeAttribute } from 'react'

interface IInput {
  name: string
  type: HTMLInputTypeAttribute
}

type IInputs = Record<string, IInput>

type FormDataAdapted = Record<string, string>

export type { IInput, IInputs, FormDataAdapted }
