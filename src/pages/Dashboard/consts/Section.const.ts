const CSectionsName = {
  Home: 'Home',
  RecommendedApps: 'RecommendedApps',
  ToDo: 'To Do',
  Integrations: 'Integrations'
} as const

const CSectionDirection = {
  Column: Symbol('Column'),
  Row: Symbol('Row')
} as const

export { CSectionsName, CSectionDirection }
