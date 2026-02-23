import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormFieldConfig } from '../../models/form-field-model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AiAgentService } from './ai-agent.service';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {

  @Input() fields:FormFieldConfig[] =[];
  @Output() formSubmit = new EventEmitter<any>();

  form!:FormGroup

  constructor(private fb:FormBuilder, private aiService:AiAgentService){}
  ngOnInit(){
    this.createForm();
    this.form.valueChanges.pipe(
      debounceTime(500)).subscribe(value =>{
        this.runAiAgent(value);
      })
  }

  runAiAgent(value:any){

  }

  createForm(){
    const group:any={};

    this.fields.forEach(field=>{
      const validators =[];

      if(field.required) validators.push(Validators.required);
      if(field.minLength) validators.push(Validators.minLength(field.minLength));
      if(field.maxLength) validators.push(Validators.maxLength(field.maxLength));
      
      group[field.name]=[
        {value:'', disabled:field.disabled},
        validators
      ];
    });
    this.form = this.fb.group(group);
  }
  submit(){
    if(this.form.value){
      this.formSubmit.emit(this.form.value)
    }else{
      this.form.markAllAsTouched();
    }
  }
}
