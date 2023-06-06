import { type CSectionsName } from '../constants'

type TSections = typeof CSectionsName[keyof typeof CSectionsName]

export type { TSections }
