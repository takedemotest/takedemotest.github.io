export type InputType = 'text' | 'email' | 'password' | 'date' | 'select' | 'textarea' | 'checkbox' | 'radio'

export interface FormFieldConfig {
    type:InputType;
    name:string;
    label:string;
    placeholder?:string;
    required?:boolean;
    message?:string;
    disabled?:boolean;
    options?:{label:string; value:any}[];
    minLength?:number;
    maxLength?:number;
}
export interface FormButtonConfig{
    label?: string;
    action:string;
    type?: 'button'| 'submit';
    icon?:string;
    styleCss?:string;
    dropdown?:boolean;
    dropdownItem?:{
       label?:string;
       action:string;
       icon?:string; 
    }[];
    disabled?:boolean;
}