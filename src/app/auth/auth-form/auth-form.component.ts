import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LOGIN } from '../store/auth.actions';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
form:FormGroup;

constructor(private fb: FormBuilder,   private store: Store) {
   this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
}
  ngOnInit() {
   
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      // Dispatch login action
        this.store.dispatch(LOGIN({ email, password }));
    }
}
}