import { ChangeDetectionStrategy, Component, computed, signal, Signal } from '@angular/core';
import { debounceTime, distinctUntilChanged, startWith, Subject, switchMap } from 'rxjs';
import { CardsComponent } from '../commonComponents/cards/cards.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LOGOUT } from '../global/store/auth/auth.actions';
import { SearchComponent } from '../commonComponents/search/search.component';
import { EntryBookComponent } from '../commonComponents/entry-book/entry-book.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DiaryDataComponent } from '../commonComponents/dairy-data/diary-data.component';
import { UsermodelService } from '../commonComponents/add-user/usermodel.service';
import { DynamicFormComponent } from '../../../projects/shared-ui/src/lib/components/dynamic-form/dynamic-form.component';
import { FormFieldConfig } from '../../../projects/shared-ui/src/lib/models/form-field-model';

export interface CustomerInfo {
  name: string;
  age: number;
  salary: number;
  location: string;
  country: string;
}

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CardsComponent, CommonModule, SearchComponent, ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent {

  newUser$:any;
  userCount$:any;

  //     users = [
  //         { name: 'Rahul', email: 'rahul@test.com' },
  //         { name: 'Amit', email: 'amit@test.com' },
  //         { name: 'Sneha', email: 'sneha@test.com' }
  // ];

  titleName = 'Employee';
  titleName2 = 'Entries';
  listOfEmployee = 'list Of Employee';

  searchControl= new FormControl('');

  userList:any;

  userFormFields: FormFieldConfig[] = [
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    placeholder:'First Name',
    required: true,
    minLength: 3
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder:'Email',
    required: true
  },
   {
    type: 'text',
    name: 'Number',
    label: 'Mobile',
    placeholder:'Mobile Number',
    required: true
  },
  {
    type: 'select',
    name: 'role',
    label: 'Role',
    placeholder:'Role',
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' }
    ]
  }
];




  customerList= signal<any[]>([]);
  allCustomerList = [
      {
        name: 'John Doe',
        age: 28,
        salary: 55000,
        location: 'New York',
        country: 'USA',
      },
      {
        name: 'Raj Patel',
        age: 29,
        salary: 48000,
        location: 'Mumbai',
        country: 'India',
      },
      {
        name: 'Hans Müller',
        age: 45,
        salary: 75000,
        location: 'Berlin',
        country: 'Germany',
      }
    ];

  employees$ = new Subject<any[]>();

  constructor(private store: Store, private userService:UsermodelService) {
    //this.employees$.next(["john", "doe", "smith", "jane", "david", "emily", "michael", "sarah", "chris", "laura"]);
    // Simulate fetching data and emitting it
    // setTimeout(() => {
    //     this.employees$.next(this.users);
    // }, 1000);
  }
  price = signal(100);
 
 
  
  tax = computed(()=>{
    console.log('checking....')
     return this.price() * 0.15;
  })

  updatePrice(){
    this.price.set(200)
  }

  ngOnInit() {
    this.employees$.subscribe((data) => {
      console.log('Employees data received:', data);
    });
     this.customerList.set(this.allCustomerList)
     this.newUser$ = this.userService.users$;
     this.userCount$ = this.userService.getUserCount();

     this.searchControl.valueChanges
       .pipe(
        startWith(''),
         debounceTime(3000),
         distinctUntilChanged(),
         switchMap((value) =>
           value
             ? this.userService.searchUser(value)
             : this.userService.getAllUsers(),
         ),
       )
       .subscribe((result) => {
         return (this.userList = result);
       });
  }

    onResultChange(filteredData: any[]) {
      this.customerList.set(filteredData)
  }

  handleSubmit(){
      console.log()
  }

  logout() {
    this.store.dispatch(LOGOUT());
  }
}
