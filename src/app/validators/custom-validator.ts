import { AbstractControl } from '@angular/forms';

export class CustomValidator {
    
    public static username() {
        return (control: AbstractControl) => {
            if (control.value !== null && control.value != '') {
                let controlChar = new RegExp("^(\\d*\\w+){3,}$");
                let isGood = (controlChar.test(control.value));
                let error = { 'controlChar' : 'wrongChar'};
                return (isGood) ? null : error;
            }
        }
    }
    
    public static password() {
        return (control: AbstractControl) => {
            if (control.value !== null && control.value != '') {
                let strenghPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
                let isGood = (strenghPassword.test(control.value));
                let error = { 'strenghPassword' : 'weak'};
                return (isGood) ? null : error;
            }
        }
    }
}