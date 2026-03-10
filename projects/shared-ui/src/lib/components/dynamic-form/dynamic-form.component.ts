import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormFieldConfig } from '../../models/form-field-model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AiAgentService } from './ai-agent.service';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent {

  @Input() fields:FormFieldConfig[] =[];
  @Output() formSubmit = new EventEmitter<any>();

  form!:FormGroup

  constructor(private fb:FormBuilder, private aiService:AiAgentService, private cdr:ChangeDetectorRef, private destroyRef:DestroyRef){}
  ngOnInit(){
    this.createForm();
    this.form.valueChanges.pipe(
      debounceTime(500)).subscribe(value =>{
        this.runAiAgent(value);
      })
  }

  runAiAgent(value:any){

  }

  ngOnChange(change:SimpleChanges):void{
    if(change['fields']){
      this.syncFormControls(this.fields);
      this.listenToValueChange();
      this.cdr.markForCheck();
    }
  }

  syncFormControls(fields:FormFieldConfig[]){
    const existing = Object.keys(this.form.controls);
    const incoming = fields.map(f => f.name);

    existing.forEach(name => {
      if(!incoming.includes(name)){
        this.form.removeControl(name);
      }
    })
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

  private listenToValueChange(){
    this.form.valueChanges.pipe(
      debounceTime(500),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(value =>{
      console.log(value)
    })
  }

  submit(){
    if(this.form.value){
      this.formSubmit.emit(this.form.value)
    }else{
      this.form.markAllAsTouched();
    }
  }
}
