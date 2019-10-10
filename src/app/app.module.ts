import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './core/app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeJa from '@angular/common/locales/ja';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './components/panier/panier.component';
import { AccueilComponent } from './components/accueil/accueil.component';

registerLocaleData(localeFr)//, 'fr');
registerLocaleData(localeDe);
registerLocaleData(localeJa);

/** 
 * Mes routes sont dans le fichier app-routing.module.ts
 */
@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    NavigationComponent,
    LoginComponent,
    PanierComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    // J'importe le module que j'ai créer dans app-routing.components.ts 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // {provide: LOCALE_ID, useValue: 'fr'} //pour configurer la langue francaise par defaut.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
