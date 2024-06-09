export interface CartItem{
    product:Product,
    qty:number,
}
export interface CartState{
    cartItems:CartItem[], 
    loading:boolean,
}
export interface Product{
    id:number,
    name:string,
    category:string
    price:number,
    rate:number,
    imageUrl:string,
}