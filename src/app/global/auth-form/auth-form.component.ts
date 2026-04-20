import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Store } from '@ngrx/store'
import { LOGIN } from '../store/auth/auth.actions'
import { AuthActionType, AuthConfig } from './auth-config'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { AUTH_CONFIG } from './auth-form.config'
import { CommonModule } from '@angular/common'
import * as AuthActions from '../store/auth/auth.actions'
@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  form!: FormGroup
  formConfig!: AuthConfig
  authType!: string
  // accountStatus="Don't have an account?"
  // authAction="Register"!

  loading = false
  error: string | null = null

  constructor (
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute
  ) {}
  ngOnInit () {
    this.authType = this.route.snapshot.data['type']
    this.formConfig = AUTH_CONFIG[this.authType]

    if (!this.authType) {
      console.error('Form type missing')
      return
    }

    this.formConfig = AUTH_CONFIG[this.authType]

    if (!this.formConfig) {
      console.error('Invalid form config')
      return
    }

    this.form = this.fb.group({})

    this.formConfig.fields.forEach(field => {
      this.form.addControl(field.name, this.fb.control('', field.validators))
    })
    if (this.formConfig.groupValidator) {
      this.form.setValidators(this.formConfig.groupValidator)
    }
  }
  onSubmit () {
    if (this.form.valid) {
      const actionMap: any = {
        [AuthActionType.LOGIN]: () =>
          AuthActions.LOGIN({
            email: this.form.value.email,
            password: this.form.value.password
          }),
        [AuthActionType.REGISTER]: () =>
          AuthActions.REGISTER({
            name: this.form.value.name,
            email: this.form.value.email,
            password: this.form.value.password
          }),
        [AuthActionType.RESET]: () =>
          AuthActions.RESET({
            email: this.form.value.email
          })
      };
      const action = actionMap[this.authType]
      if(action){
        this.store.dispatch(action());
      }
    }
  }
}
