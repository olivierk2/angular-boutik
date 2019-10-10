import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { LoginComponent } from './components/login/login.component';
import { PanierComponent } from './components/panier/panier.component';
import { AccueilComponent } from './components/accueil/accueil.component';

/**
 * Nous sommes souvent ammené à avoir beaucoup de lien pour naviguer
 * d'un composant à l'autre, j'ai donc choisis de faire un fichier dedié
 * pour + de visibilité.
 * au chemins de navigation que j'ai appelé app-routing.module.ts
 * app.module.ts ira chercher ici pour le routing.
 */

const appRoutes: Routes = [
  {path: '', component: AccueilComponent },
  {path: 'products', component: ListItemComponent },
  {path: 'login', component: LoginComponent },
  {path: 'panier', component: PanierComponent },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // J'import RouterModule, dans ce module.
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    // je l'exporte pour pouvoir l'utiliser
    RouterModule,
  ]
})
export class AppRoutingModule { }
