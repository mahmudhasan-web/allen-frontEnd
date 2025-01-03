// import { StaticImageData } from "next/image"

import { StaticImageData } from "next/image"

export interface ProductCardInterFace {
  id: number
  productImage: StaticImageData
  category: { categoryName: string }
  description: string
  rating: number
  mainPrice: number
  discountPrice: number
  name: string
}


export interface MyCart {
  product: {
    productImage: string
    name: string
    discountPrice: number
    mainPrice: number
    id: string
  }
}


// export interface OrderList {
//   products: {
//     product: {
//       productImage: string
//       name: string
//       discountPrice: number
//       mainPrice: number
//     },
//     productQuantity: number

//   }[]
// }


interface Product {
  productImage: string;
  name: string;
  discountPrice: number;
  mainPrice: number;
}

export interface OrderProduct {
  product: Product;
  productQuantity: number;
}

export interface OrderList {
  OrderProducts: OrderProduct[];
  status : string;
}