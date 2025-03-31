export interface MenuItem {
  id: number;
  name: string;
  content: string;
  icon:string
  to:string
}

export interface DocumentItem {
  price: string
  date: string
  name: string
  type: string
}

export interface TabsType {
  label: string
  value: string
}