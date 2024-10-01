// src/types.d.ts
export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    countInStock: number;
  }
  
  export interface ICartItem {
    product: IProduct;
    quantity: number;
  }
  
  export interface IUser {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  }
  