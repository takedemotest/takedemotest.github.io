import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsermodelService } from './usermodel.service';
import { addNewUser } from './add-user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent { 
  form:FormGroup;
    constructor(private fb:FormBuilder, private userService:UsermodelService ){

    this.form = this.fb.group({
      name:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      role:['user']
    })
  }
  onSubmit(){
    if(this.form.invalid) return;
    const user:addNewUser = {
          id: crypto.randomUUID(),
          name: this.form.value.name,
          email: this.form.value.email,
          role: this.form.value.role,
          createdAt: new Date()
    }
      this.userService.addUser(user);
      this.form.reset({role:'USER'})
  }
}