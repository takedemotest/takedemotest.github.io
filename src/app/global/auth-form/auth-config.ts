import { ValidatorFn } from "@angular/forms";

export type authType = 'login'| 'register' | 'reset';

export interface AuthField{
    name:string;
    label:string;
    type:string;
    placeholder:string;
    validators:ValidatorFn[];
}

export interface AuthConfig {
    title:string;
    actionText:string;
    submitAction:string;
    fields:AuthField[];
    groupValidator?:ValidatorFn;
}

