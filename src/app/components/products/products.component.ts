import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service'
import {MatSnackBar} from '@angular/material';
import { Product } from '../../models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  readonly URL_API = 'http://localhost:3000/api/products/'
  

  constructor(private ps: ProductService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
  });

  productSubmit() {
    this.ps.addProduct(this.productForm.value)
      .subscribe(res => {       
        let data: any = res
        this.snackBar.open(data.message, 'Cerrar');
      })
  }

}
