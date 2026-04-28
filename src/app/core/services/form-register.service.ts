import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

    public formRegistry = new Map<string, any>();

    registerForm(name: string, formConfig: any) {
        this.formRegistry.set(name, formConfig);
    }

    getFormConfig(name: string): any | undefined {
        return this.formRegistry.get(name);
    }


}