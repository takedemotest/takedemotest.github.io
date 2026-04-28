import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CommonModule } from '@angular/common';
import { FormRegisterService } from './core/services/form-register.service';
import { ANIMAL_CONFIG } from './core/config/animal-form-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
  private registry = inject(FormRegisterService);
  constructor(){
  }

  ngOnInit(){
      this.registry.registerForm('ANIMAL_FORM',{  
        title:'Add Animal',
        type:'inline',
        fields:ANIMAL_CONFIG,
        buttonConfig:{
          label:'Add',
          action:'addAnimal',
          type:'submit'
        }        
      })
  }

}
