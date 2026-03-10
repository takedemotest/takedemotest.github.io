import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  Signal
} from '@angular/core'
import {
  debounceTime,
  distinctUntilChanged,
  from,
  Observable,
  Observer,
  shareReplay,
  startWith,
  Subject,
  switchMap,
  tap
} from 'rxjs'
import { CardsComponent } from '../commonComponents/cards/cards.component'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { LOGOUT } from '../global/store/auth/auth.actions'
import { SearchComponent } from '../commonComponents/search/search.component'
import { EntryBookComponent } from '../commonComponents/entry-book/entry-book.component'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { DiaryDataComponent } from '../commonComponents/dairy-data/diary-data.component'
import { UsermodelService } from '../commonComponents/add-user/usermodel.service'
import { DynamicFormComponent } from '../../../projects/shared-ui/src/lib/components/dynamic-form/dynamic-form.component'
import { FormFieldConfig } from '../../../projects/shared-ui/src/lib/models/form-field-model'
import { ApiService } from '../core/services/api.service'
import { Task } from '../model/model'

export interface CustomerInfo {
  name: string
  age: number
  salary: number
  location: string
  country: string
}

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    CardsComponent,
    CommonModule,
    SearchComponent,
    ReactiveFormsModule,
    DynamicFormComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  newUser$: any
  userCount$: any
  titleName = 'Employee'
  titleName2 = 'Entries'
  listOfEmployee = 'list Of Employee'
  searchControl = new FormControl('')
  userList: any
  task$!: Observable<Task[]>

  userFormFields: FormFieldConfig[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      placeholder: 'First Name',
      required: true,
      minLength: 3
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      required: true
    },
    {
      type: 'text',
      name: 'Number',
      label: 'Mobile',
      placeholder: 'Mobile Number',
      required: true
    },
    {
      type: 'select',
      name: 'role',
      label: 'Role',
      placeholder: 'Role',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' }
      ]
    }
  ]

  customerList = signal<any[]>([])
  allCustomerList = [
    {
      name: 'John Doe',
      age: 28,
      salary: 55000,
      location: 'New York',
      country: 'USA'
    },
    {
      name: 'Raj Patel',
      age: 29,
      salary: 48000,
      location: 'Mumbai',
      country: 'India'
    },
    {
      name: 'Hans Müller',
      age: 45,
      salary: 75000,
      location: 'Berlin',
      country: 'Germany'
    }
  ]

  employees$ = new Subject<any[]>()
  sub: any

  constructor (
    private store: Store,
    private userService: UsermodelService,
    private taskService: ApiService
  ) {
    //this.employees$.next(["john", "doe", "smith", "jane", "david", "emily", "michael", "sarah", "chris", "laura"]);
    // Simulate fetching data and emitting it
    // setTimeout(() => {
    //     this.employees$.next(this.users);
    // }, 1000);

       const promise = fetch('https://jsonplaceholder.typicode.com/users').then(res=>console.log("'where is data1'",res))
       console.log('where is data',promise)
        // from(promise).pipe(
        //   switchMap(res=>res.json())
        // ).subscribe(data=> console.log(data))
  }
  price = signal(100)

  tax = computed(() => {
    console.log('checking....')
    return this.price() * 0.15
  })

  updatePrice () {
    this.price.set(200)
  }

  ngOnInit () {

    this.task$ = this.taskService.taskList().pipe(
      shareReplay(1),
      tap(tasks => console.log(tasks))
    )
    // this.taskService.taskList().subscribe((task)=>{
    //   this.task=task;
    // })
    this.employees$.subscribe(data => {
      console.log('Employees data received:', data)
    })
    this.userService.users$.subscribe((user)=> console.log(user))
    this.customerList.set(this.allCustomerList)
    this.newUser$ = this.userService.users$
    this.userCount$ = this.userService.getUserCount()

    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(3000),
        distinctUntilChanged(),
        switchMap(value =>
          value
            ? this.userService.searchUser(value)
            : this.userService.getAllUsers()
        )
      )
      .subscribe(result => {
        return (this.userList = result)
      })

    //type of subject
    //1.subject
    //2.ObservableSubject
    //3.ReplaySubject
    //4.AsyncSubject

    //rxjs
    const subject = new Subject<number>()
    subject.subscribe(val => console.log('Subscriber 1:', val))
    subject.next(10)

    const promise = new Promise((res, rej) => {
      let success = true
      if (success) {
        res('resolve data')
      } else {
        rej('rejected')
      }
    })

    promise
      .then(result => console.log(result))
      .catch(error => console.log(error))

    const obser$ = new Observable(test => {
      test.next(1)
      test.next(2)
      test.next(3)
      test.complete()
    })

    this.sub = obser$.subscribe({
      next: val => console.log(val),
      error: err => console.log(err),
      complete: () => console.log('done')
    });

 
  }

  onResultChange (filteredData: any[]) {
    this.customerList.set(filteredData)
  }

  handleSubmit () {
    console.log()
  }

  logout () {
    this.store.dispatch(LOGOUT())
  }

  ngOnDestroy () {
    this.sub.unsubscribe()
  }
}


