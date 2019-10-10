import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  panier: {}[] = [];

  ITEMS = [
    {
      id: 1,
      api_id: 20073763,
      name: 'Riz basmati',
      price: 1.99,
      img: 'https://static.openfoodfacts.org/images/products/20073763/front_fr.4.400.jpg'
    },
    {
      id: 2,
      name: 'Chocolat',
      price: 2.35,
      img: 'https://static.openfoodfacts.org/images/products/304/514/028/0803/front_fr.33.400.jpg'
    },
    {
      id: 3,
      name: 'Lentilles',
      price: 1.00,
      img: 'https://static.openfoodfacts.org/images/products/356/470/000/1226/front_fr.39.200.jpg'
    },
    {
      id: 4,
      name: 'Haricots rouges',
      price: 2.00,
      img: 'https://static.openfoodfacts.org/images/products/356/470/713/7614/front_fr.14.200.jpg'
    },
    {
      id: 5,
      name: 'pizza',
      price: 3.65,
      img: 'https://static.openfoodfacts.org/images/products/356/007/026/2137/front_fr.17.200.jpg'
    }
  ]

  constructor() { }

  findAll() {
    return this.ITEMS;
  }

  findById(id: number) {
    /**
     * On filtre les produit et on ne garde que les produits qui ont le bon 'id'.
     * filter renvoie un nouveau tableau avec les éléments correct.
     * logiquement on ne devrait en avoir que 1 donc on ne prend que la case 0 du tableau.
     */
    let product = this.ITEMS.filter(
      (product) => product.id === id
    )[0];
    return product;
  }

  /* on recherche un produit par sont id */
  addProduct(id: number) {
    let product = this.findById(id);
    /* on verife que le produit a bien été trouvé.*/
    let isGood: boolean = (isNullOrUndefined(product));
    /* si isGood est faux, c'est que product n'est pas null ou n'est pas undefined 
     * on peut donc l'ajouter au panier.
     */
    if (!isGood)
      this.panier.push(product);
  }

  getPanier() {
    return this.panier;
  }

  viderPanier() {
    this.panier = [];
  }
}
