import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  products:{}[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    /* le panier se trouve dans productService, ainsi il est disponible partout ou l'on injecte
     * ProductService.
     */
    this.products = this.productsService.getPanier();
    // console.log("panier = ", this.products);
  }

  viderPanier() {
    this.productsService.viderPanier();
    this.products = this.productsService.getPanier();
  }
}
