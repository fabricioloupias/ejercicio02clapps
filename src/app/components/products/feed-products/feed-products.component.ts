import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'
import { Product } from '../../../models/product';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-feed-products',
  templateUrl: './feed-products.component.html',
  styleUrls: ['./feed-products.component.css']
})
export class FeedProductsComponent implements OnInit {

  products: Product[]
  formEdit: any;
  _id: string:

  constructor(private ps: ProductService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.obtenerProductos()
  }

  productEdit = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
  });

  obtenerProductos(){
    this.ps.getProducts()
      .subscribe(res => {
        this.products = res as Product[]
      })
  }

  edit(event){
    this.ps.getProduct(event.target.id)
      .subscribe(res =>{
        let data:any = res;
        this._id = event.target.id
        this.formEdit = this.productEdit = new FormGroup({
          name: new FormControl(data.name),
          description: new FormControl(data.description),
          precio: new FormControl(data.precio),
          stock: new FormControl(data.stock),
        });
      })
  }

  editSubmit(){
    this.ps.editProduct(this._id, this.formEdit.value)
      .subscribe(res => {
        let data: any = res;
        this.snackBar.open(data.message, 'Cerrar', {
          duration: 3000
        });
        this.obtenerProductos()
      })
  }

  delete(event){
    this.ps.deleteProduct(event.target.id)
      .subscribe(res => {
        let data: any = res
        this.snackBar.open(data.message, 'Cerrar');
        this.obtenerProductos()
      })
  }

}
