interface ISection {
  name: string
}

interface IItem {
  name: string
  url: string
  description: string
}

type TItems = Record<string, IItem>

export type { IItem, ISection, TItems }
