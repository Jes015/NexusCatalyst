const CSectionsName = {
  Home: 'Home',
  RecommendedApps: 'RecommendedApps',
  ToDo: 'ToDo',
  Integrations: 'Integrations'
} as const

const CSectionType = {
  App: Symbol('App'),
  Integration: Symbol('Integration')
}

const CSectionDirection = {
  Column: Symbol('Column'),
  Row: Symbol('Row')
} as const

export { CSectionsName, CSectionDirection, CSectionType }
