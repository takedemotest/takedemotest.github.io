import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, EventEmitter, input, Input, Output, SimpleChanges } from '@angular/core';
import { FormButtonConfig, FormFieldConfig } from '../../models/form-field-model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AiAgentService } from './ai-agent.service';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconService } from '../../../../../../src/app/core/services/icon.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'lib-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule,MatIconModule, MatMenuModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent {

  @Input() fields:FormFieldConfig[] =[];
  @Input() buttonConfig?:FormButtonConfig | undefined;
  @Input () title?:string;
    @Input () type?:string;
  @Output() actionTriggered:EventEmitter<any> = new EventEmitter<{action:string, data:any}>();

  form!:FormGroup

  constructor(private fb:FormBuilder, private aiService:AiAgentService,private iconService: IconService,  private cdr:ChangeDetectorRef, private destroyRef:DestroyRef){}
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

  handleAction(actionName:string | undefined){
    if (!actionName) return;
    if(this.form.value){
      this.actionTriggered.emit(
        {
        action: actionName, 
        data: this.form.value
      }
      );
    }else{
      this.form.markAllAsTouched();
    }
  }
}
