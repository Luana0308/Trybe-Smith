export interface IOrder {
  id:number,
  userId: number,
  productsIds: number[]
}

export interface IOrderModel {
  id:number,
  userId: number,
  productsIds: number
}