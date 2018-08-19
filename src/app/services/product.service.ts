import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct: Product;
  product: Product[];
  readonly URL_API = 'http://localhost:3000/api/products/'

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.URL_API)
  }
  
  addProduct(product: Product){
    return this.http.post(this.URL_API, product)
  }

  editProduct(_id: string, product: Product){
    return this.http.put(this.URL_API + _id, product)
  }

  getProduct(_id: string){
    return this.http.get(this.URL_API + _id)
  }

  deleteProduct(_id: string){
    return this.http.delete(this.URL_API + _id)
  }



}
