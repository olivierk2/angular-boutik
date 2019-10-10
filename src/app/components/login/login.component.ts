import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  products: [{}];

  constructor(
    private fb: FormBuilder
    ) { }

  signInForm = this.fb.group({
    username: ['', [Validators.required, CustomValidator.username()]],
    password: ['', [Validators.required, CustomValidator.password()]],
  });

  ngOnInit() {
  }

  controlUsername()/* : Boolean | string */ { //renvoie soit un boolean soit une string

    // on stock le champ input username dans une variable username pour ne pas tout recrir a chaque fois.
    let username = this.signInForm.controls.username;
    // console.log("username = ", username); 
    /** 
     * touched renvoie vrai si le champs a été touché (clique dedans, puis clique ailleurs)
     * On ne veut pas afficher un message d'erreur si l'utilisateur n'a encore rien fait. 
     */
    if (username.touched){ 
      if (username.hasError('required')){
          return "Le nom d'utilisateur est obligatoire ! ";
      }
      if (username.hasError('controlChar')){
        return "Le nom ne doit contenir que des lettres, chiffres, _ ";
      }
    }
    return false;
  }

  controlPassword() {
    let password = this.signInForm.controls.password;
    if (password.touched){
      if (password.hasError('required')){
          return "Le mot de passe est obligatoire ! ";
      }
      if (password.hasError('strenghPassword')){
        return "Le mot de passe ne respecte pas le format.";
      }
    }
    return false;
  }
}
