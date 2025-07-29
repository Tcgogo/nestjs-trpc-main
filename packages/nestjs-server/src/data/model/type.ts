export interface MenuMeta {
  title: string
  icon?: string
}

export interface MenuItem {
  path?: string
  component?: string
  name?: string
  meta?: MenuMeta
  children?: MenuItem[]
}

export interface Model {
  title: string
  model: string
  menu: MenuItem[]
}
