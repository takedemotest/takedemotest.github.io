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
import { FormConfig, FormFieldConfig } from '../../../projects/shared-ui/src/lib/models/form-field-model'
import { ApiService } from '../core/services/api.service'
import { Task } from '../model/model'
import { LOAD_STATS } from '../global/store/dashboard/dashboard.actions'
import { ChartConfiguration } from 'chart.js'
import { selectDashboardStates } from '../global/store/dashboard/dashboard.selectors'
import { ChartComponent } from '../../../projects/shared-ui/src/lib/components/chart/chart.component'
import { MatIconModule } from '@angular/material/icon'
import { IconService } from '../core/services/icon.service'
import { AnimalService } from '../core/services/animal.service'
import { addAnimal, deleteAnimal, loadAnimals, updateAnimal } from '../global/store/animal/animal.actions'
import { Animal } from '../global/store/animal/animal.model'
import { selectAnimals } from '../global/store/animal/animal.selectors'
import { FormRegisterService } from '../core/services/form-register.service'
import { selectUser } from '../global/store/auth/auth.selectors'
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

  addAnimals: FormConfig[] = [
    {
      title: 'Add New Animal',
      fields: [
       
      ],
      buttonConfig:{label:'Add', action:'addAnimal'}
    }
  ]

  private store = inject(Store);
  private formconfig = inject(FormRegisterService);

  animals:any;
  public animals$ = this.store.select(selectAnimals);
  selectedIds = new Set<string>();

  public activePlugin = signal<any>(null);

  user$ = this.store.select(selectUser);
  isOpen = false;

  constructor ( private cdr:ChangeDetectorRef,private iconService: IconService, private animalService: AnimalService, ) {

  }

  ngOnInit () {
    const formConfig:any = this.formconfig.getFormConfig('ANIMAL_FORM');
    this.activePlugin.set(formConfig);
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
   });
}

toggleSidebar() {
  this.isOpen = !this.isOpen;
}

  onResultChange (filteredData: any[]) {}
  handleSubmit (addAnimalData: any) {
    const formConfig:any = this.formconfig.getFormConfig('ANIMAL_FORM');
    const animalData = {
      name: addAnimalData.data.name,
      age: addAnimalData.data.age,
      milkProduction: addAnimalData.data.Milk,
      type: addAnimalData.data.Type,
      healthStatus: addAnimalData.data['Health Status']
    }
      if(formConfig.buttonConfig.label === "Edit") {
        const editId = Array.from(this.selectedIds)[0];
        Object.assign(animalData, {id: editId});
        this.store.dispatch(updateAnimal({ animal: animalData}));
      }
      else{
        this.store.dispatch(addAnimal({ animal: animalData }));
      }
      this.selectedIds.clear();
  }

    toggleSelection(id: string) { 
      if(this.selectedIds.has(id)) {
        this.selectedIds.delete(id);
      } else {
        this.selectedIds.add(id);
      }
    }

  add(){
      const formConfig:any = this.formconfig.getFormConfig('ANIMAL_FORM');
      formConfig.buttonConfig.label = "Add";
      formConfig.title = "Add Animal";
      this.selectedIds.clear();
  }
  delete(){
    const isIdToDelete = Array.from(this.selectedIds);
    if(isIdToDelete.length === 0) {
      alert("Please select at least one animal to delete.");
      return;
    }
    if(confirm(`Are you sure you want to delete ${isIdToDelete.length} animals?`)) {
      isIdToDelete.forEach(id => {
        this.store.dispatch(deleteAnimal({ id })); 
      });
    }
    this.selectedIds.clear();
  }
  edit(){
    if(this.selectedIds.size < 1) {
      alert("Please select exactly one animal to edit.");
      return;
    }
    if(confirm(`Are you sure you want to edit this animal?`)) {
      const formConfig:any = this.formconfig.getFormConfig('ANIMAL_FORM');
      formConfig.buttonConfig.label = "Edit";
      formConfig.title = "Edit Animal";
    }
  }

  logout () {
    this.store.dispatch(LOGOUT())
  }

  ngOnDestroy () {}
}
