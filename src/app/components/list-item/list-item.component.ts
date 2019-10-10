import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ITEMS } from 'src/assets/items';
import { NavigationService } from 'src/app/services/navigation.service';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  /**
   * Nous créeons une variable local search pour ne pas avoir à écrire tous le temps
   * this.NavigationService.getSearch().
   * gain de temps.
   */
  private search: string = "";

  /**
   * On crée une 'Subscription' principalement pour pouvoir se désabonner lors de la destruction du composant.
   * A Chaque changement de page avec le routerLink, nous detruisons le composant pour placé le nouveau..
   * Si on ne se désabonne pas, le composant reste inscrit et continue de recevoir les changements.
   * Donc ca laisse la porte ouverte a des fuites de mémoire qui sont très mauvaise pour les applications.
   * (Ralentissement du site par exemple).
   * voir ngOnInit()
   */
  private searchInscription: Subscription;

  articles: object[] = ITEMS;
  isList: boolean = (this.articles.length > 0);

  constructor(
    private navService: NavigationService,
    private productsService: ProductsService) 
  {
      // this.articles = productsService.findAll();
  }

  ngOnInit() {
    /* 
     * searchInscription s'abonne aux changements de 'searchOnChange', et grâce a cela, 
     * il peut resilier sont abonnement, s'il le souhaite. 
     * A chaque fois que la variable 'search' de navigationService.ts change,
     * 'searchInscription' recevra la notification et declenchera la fonction anonyme ligne 46.
     * la fonction flechée, s'occupe de mettre a jour la variable locale, et de filtrer le tableau avec
     * la nouvelle valeur.
     * si on appelle this.navService.searchOnChange.subscribe(...) sans variable inscrite (searchInscription 
     * dans notre exemple). 
     * On ne peut pas savoir que la variable inscrite souhaite resilier son abonnement.
     */
    this.searchInscription = this.navService.searchOnChange.subscribe(
      (search) => {
        this.search = search;
        this.filterProducts(this.search);
      }
    );
  }

  /**
   * fonction qui va trier notre liste de produit en fonction du nom recherché
   */
  filterProducts(search: string) {
    this.articles = ITEMS.filter( (item) => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    this.isList = (this.articles.length > 0);
  }
  
  addProduct(id: number) {
    /**
     * on appelle un productService qui s'occupe de centraliser la gestion des produits
     * ajoute, modification, lecture etc .. 
     */
    this.productsService.addProduct(id);
  }

  ngOnDestroy(): void {
    console.log("list-item composant detruit.")
    this.searchInscription.unsubscribe();
    
  }
}
