import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { DiaryData, DUMMY_DAIRY_DATA } from './diary-data.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { DiaryDataService } from './diary-data.service';

@Component({
  selector: 'app-diary-data',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './diary-data.component.html',
  styleUrl: './diary-data.component.scss'
})
export class DiaryDataComponent {

  cowInfoData = signal<DiaryData[]>(DUMMY_DAIRY_DATA);
  @ViewChild('diaryModal') modelEle!: ElementRef;

  boostrapModel:any;
  user:any;

  cowForm!: FormGroup;

    constructor(private fb:FormBuilder, public dds:DiaryDataService){}

    ngOnInit(){
      this.initForm();
      this.dds.genericData$.subscribe((data)=>{
        if(data && data.length > 0)
          {this.cowInfoData.set(data)}
        else{
          this.cowInfoData.set(DUMMY_DAIRY_DATA)
        }
        
      })
    }

    initForm(){
      this.cowForm = this.fb.group({
         cowName:['', [Validators.required, Validators.minLength(3)]],
         milk:['', [Validators.required]],
         lastFill:['',[Validators.required]],
         healthHistory:['',[Validators.required]],
         sickDate:['',[Validators.required]]
      })
    }

    onSubmitDairyEntry(){
      if(this.cowForm.valid){
        const user:DiaryData = this.cowForm.value;
        user.id = crypto.randomUUID() 
        this.dds.addCow(user);
        this.closeModal();
      }
    }

    openModal(){
        this.boostrapModel = new bootstrap.Modal(this.modelEle.nativeElement);
        this.boostrapModel.show();
    }
     closeModal(){
        this.boostrapModel.hide();
     }
}
