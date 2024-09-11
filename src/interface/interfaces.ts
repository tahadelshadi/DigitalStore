export interface User {
  email: any;
  ssn: Number;
  phone_number: string;
  first_name: string;
  last_name: string;
  address: string;
  zip_code: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface CartState {
  cartItems: CartItem[];
  loading: boolean;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rate: number;
  images: Image[];
  description: string;
  stock: Number;
}

export interface Image {
  id: number;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}
