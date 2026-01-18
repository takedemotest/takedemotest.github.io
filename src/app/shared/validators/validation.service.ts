import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static email():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
        const value = control.value;
        if (!value) return null;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value)?null:{emailInvalid:true}
    }
  }

  static password():ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
      const value = control.value;
      if(!value) return null;
      const errors:ValidationErrors ={};

      const hasUpperCase =/[A-Z]/.test(value);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasLen = value.length >= 6;

      if(!hasUpperCase){
        errors['hasUpperCase'] = true;
      }
      if(!hasSpecial){
        errors['hasSpecial'] = true;
      }
      if(!hasNumber){
        errors['hasNumber'] = true;
      }
      if(!hasLen){
        errors['hasLen'] = true;
      }
      return Object.keys(errors).length ? errors : null;
    }
  }

  static match(controlName:string, matchName:string):ValidatorFn{
    return(group: AbstractControl):ValidationErrors | null =>{
      const control = group.get(controlName);
      const match = group.get(matchName);

      if(!control || !match) return null;
      if(control.value !== match.value){
        match.setErrors({notMatching : true});
        return {notMatching : true}
      }
      match.setErrors(null);
      return null;
    }
  }

}
