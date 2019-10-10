import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private search: string = "";

  /**
   * Une Observable est un objet, qui lorsqu'on appel sa methode .subscribe(maFonction), execute 'maFonction' qu'on
   * on dit que 'maFonction' est un Observeur.
   * lui donné en parametre. Une fois l'Observeur executé ( maFonction dans notre exemple ), 
   * l'observable est fini (completée).
   * Un 'Subject' fonctionne de la même maniere qu'une observable, mais est aussi un Observeur.
   * On peut donc lui envoyé des données. cf ligne 26.
   */
  searchOnChange = new Subject<string>();

  constructor() {
  }

  setSearch(value : string) {
    this.search = value;
    /**
     * A chaque saisie, la fonction onInput($event) de navigation.component.ts va appeler 
     * cette fonction setSearch(value : string).
     * Notre variable this.search est bien mise à jour seulement, les abonnés ( ou inscrits)
     * à notre variable 'searchOnChange' ne sont pas au courant que la variable 'this.search' à changée.
     * (par exemple: searchInscription du fichier list-item.components.ts ligne 53-en theorie)
     * Pour prévenir les abonnées, on appel la methode next() avec la valeur à diffuser.
     * Nous souhaitons diffuser la nouvelle valeur de this.search
     * parce que 'searchSubscription' s'est abonné avec la methode subscribe(), il recevra la nouvelle valeur.
     */
    this.searchOnChange.next(this.search);
  }

  /* On creer une fonction 'emitSearchChange' comme cela, nous pourrons 
   * l'appelé a l'exterieur du service.
   * par exemple si 'searchSubscription' du fichier item-list.component.ts, modifie la valeur search du webservice
   * il peut prevenir tous les abonnée en appelant cette methode. 
   * */
  emitSearchChange() {
    this.searchOnChange.next(this.search);
  } 

  /* non necessaire pour l'instant mais peut être pratique */
  getSearch() {
    return this.search;
  }
}
