import { Validators } from '@angular/forms';
import { AuthConfig } from './auth-config';
import { ValidationService } from '../../shared/validators/validation.service';

export const AUTH_CONFIG: Record<string, AuthConfig> = {
  login: {
    title: 'Login',
    actionText: 'Login',
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'email',
        validators: [
          Validators.required,
          Validators.email,
          ValidationService.email(),
        ],
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'password',
        validators: [Validators.required, ValidationService.password()],
      },
    ],
    submitAction: 'login',
  },
  register: {
    title: 'Register',
    actionText: 'Register',
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'text',
        validators: [Validators.required],
      },
      {
        name: 'email',
        label: 'Email',
        placeholder: 'email',
        type: 'email',
        validators: [Validators.required, Validators.email],
      },
      {
        name: 'password',
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        validators: [Validators.required, ValidationService.password()],
      },
       {
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm password',
        validators: [Validators.required]
      }
    ],
     groupValidator:ValidationService.match("password", "confirmPassword"),
    submitAction: 'Register',
  },
  reset: {
    title: 'Reset Password',
    actionText: 'Reset',
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'email',
        validators: [Validators.required, Validators.email],
      },
    ],
    submitAction: 'Reset',
  },
};
