import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';

  constructor(){
  }

}
