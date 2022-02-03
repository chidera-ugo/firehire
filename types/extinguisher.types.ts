export interface IExtinguisher {
  id: number
  title: string
  snippet: string
  image: string
}

export interface ISmallImage {
  id: number
  image: string
}

export interface IProduct extends IExtinguisher {
  description: string
}
