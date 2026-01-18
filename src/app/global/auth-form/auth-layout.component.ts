import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrl: './auth-form.component.scss'
})
export class AuthLayoutComponent {}