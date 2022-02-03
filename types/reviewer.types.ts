export interface IReviewer {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  picture: {
    thumbnail: string
  }
}
