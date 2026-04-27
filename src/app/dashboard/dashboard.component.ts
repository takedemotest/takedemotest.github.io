import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
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
import { LOAD_STATS } from '../global/store/dashboard/dashboard.actions'
import { ChartConfiguration } from 'chart.js'
import { selectDashboardStates } from '../global/store/dashboard/dashboard.selectors'
import { ChartComponent } from '../../../projects/shared-ui/src/lib/components/chart/chart.component'
import { MatIconModule } from '@angular/material/icon'
import { IconService } from '../core/services/icon.service'
import { AnimalService } from '../core/services/animal.service'
import { loadAnimals } from '../global/store/animal/animal.actions'
import { Animal } from '../global/store/animal/animal.model'
import { selectAnimals } from '../global/store/animal/animal.selectors'


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    SearchComponent,
    ReactiveFormsModule,
    DynamicFormComponent,
    ChartComponent,
    MatIconModule
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
  lineChartData = signal<ChartConfiguration<'line'>['data'] | null>(null)
  pieChartData!: ChartConfiguration<'pie'>['data']

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

  private store = inject(Store);

  animals:any;
  public animals$ = this.store.select(selectAnimals);
  selectedIds = new Set<string>();
  

  constructor ( private cdr:ChangeDetectorRef,private iconService: IconService, private animalService: AnimalService) {

  }

  ngOnInit () {
    this.store.dispatch(LOAD_STATS())
    this.store.select(selectDashboardStates).subscribe(data => {
      if (!data || !data.milkProduction) return;
      this.lineChartData.set(
        {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            data: [...data.milkProduction],
            label: 'Milk Prduction'
          }
        ]
      }
      )
      this.pieChartData = {
        labels: ['Cow', 'Buffalo', 'Goat'],
        datasets: [
          {
            data: [
              data.animalDistribution.cow,
              data.animalDistribution.buffalo,
              data.animalDistribution.goat
            ]
          }
        ]
      }
    })
   this.store.dispatch(loadAnimals()) ;
   this.animals$.subscribe(data=>{
    this.animals = data;
   })
}

  onResultChange (filteredData: any[]) {}
  handleSubmit () {
    console.log()
  }

    toggleSelection(id: string) { 
      if(this.selectedIds.has(id)) {
        this.selectedIds.delete(id);
      } else {
        this.selectedIds.add(id);
      }
    }

  add(){}
  delete(){
    const isIdToDelete = Array.from(this.selectedIds);
    if(isIdToDelete.length === 0) {
      alert("Please select at least one animal to delete.");
      return;
    }
    if(confirm(`Are you sure you want to delete ${isIdToDelete.length} animals?`)) {
      isIdToDelete.forEach(id => {
        this.animalService.deleteAnimal(id).subscribe(() => {
          this.store.dispatch(loadAnimals());
          this.store.dispatch(LOAD_STATS());
        });
      });
    }
    this.selectedIds.clear();
  }
  edit(){}

  logout () {
    this.store.dispatch(LOGOUT())
  }

  ngOnDestroy () {}
}
