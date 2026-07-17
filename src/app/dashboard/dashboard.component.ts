import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  signal,
  Signal,
  TemplateRef,
  ViewChild
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

import { CardsComponent } from '../../../projects/shared-ui/src/lib/components/cards/cards.component'
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
import { ResponsiveService } from '../core/services/responsive-service.service'
import { SliderDrawerComponent } from '../../../projects/shared-ui/src/lib/components/slider-drawer/slider-drawer.component'
import { NavigationService } from '../../../projects/shared-ui/src/lib/components/navigation/navigation.service'
import { NavigationComponent } from '../../../projects/shared-ui/src/lib/components/navigation/navigation.component'
import { PROFILE_NAV, SIDEBAR_NAVIGATION } from '../core/config/dashboard-navigation-config'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { NavItem } from '../../../projects/shared-ui/src/lib/models/navigation-model'
import { RECENT_ACTIVITY_CONFIG } from '../core/config/recent-activity-config'
import { dashboardQuickActions } from '../core/config/quick-action-config'
import { CardConfig } from '../../../projects/shared-ui/src/lib/models/card-model'
import { DASHBOARD_SVG_ICONS } from '../core/config/dashboard-svg-icon'
@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    SearchComponent,
    ReactiveFormsModule,
    DynamicFormComponent,
    ChartComponent,
    MatIconModule,
    SliderDrawerComponent,
    NavigationComponent,
    CardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements AfterViewInit {
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
  isAnimalOpen = false;
  isRecentActivity=false;
  sliderTitle='';
  selectedAnimalData:any = null;
  activityData:any = null;


  addAnimals: FormConfig[] = [
    {
      title: 'Add New Animal',
      fields: [
       
      ],
      buttonConfig:{label:'Add', action:'addAnimal'}
    }
  ]

   recentAcitivity: FormConfig[] = [
    {
      title: 'Acitvity',
      fields: [  ],
      buttonConfig:{label:'Add', action:'addAnimal'}
    }
  ]

  private store = inject(Store);
  private formconfig = inject(FormRegisterService);
  private navService = inject(NavigationService)
  public iconService = inject(IconService)

  animals:any;
  public animals$ = this.store.select(selectAnimals);
  selectedIds = new Set<string>();

  public activePlugin = signal<any>(null);
  public recentAcitivitySignal = signal<any>(null);

  user$ = this.store.select(selectUser);
  isOpen = false;

  public quickActions = signal<CardConfig[]>([]);


  constructor ( private cdr:ChangeDetectorRef,private animalService: AnimalService, public responsive:ResponsiveService) {
        this.iconService.registerIcons(DASHBOARD_SVG_ICONS);
  }

  @ViewChild('customInvoice') invoiceTemplate!: TemplateRef<any>;

  ngOnInit () {
    this.formconfig.registerForm('RECENT_ACTIVITY_FORM',{
      title:'Add Activity',
      type:'block',
      fields:RECENT_ACTIVITY_CONFIG,
      buttonConfig:{
        label:'Add',
        action:'addActivity',
        type:'submit'
      }        
    })

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

   this.navService.setUserRole('ADMIN');
   this.navService.registerMenu('sidebar-menu', SIDEBAR_NAVIGATION);
   this.navService.registerMenu('profile-menu', PROFILE_NAV);

   this.navService.menuAction$
   .subscribe((item:NavItem)=>{
     this.menuAction(item.action, item)
   })
}

  ngAfterViewInit(){
     const actionTemplateConfig = dashboardQuickActions({
      invoice: this.invoiceTemplate
     })
     this.quickActions.set(actionTemplateConfig)
    }

menuAction(action:string|undefined, item:NavItem) {
  if(action === 'logout') {
    this.logout();
  }
}

handleQuickAction(event:{ cardId: string; actionId: string }) {
  switch(event.cardId) {
    case 'ACTION_ADD_ANIMAL':
      this.add();
      break;
    case 'ACTION_ADD_ACTIVITY':
      this.openActivity();
      break;
    }
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
      this.isAnimalOpen = false;
  }

    toggleSelection(id: string) { 
      if(this.selectedIds.has(id)) {
        this.selectedIds.delete(id);
      } else {
        this.selectedIds.add(id);
      }
    }

  add(){
      this.isAnimalOpen = true;
      const formConfig:any = this.formconfig.getFormConfig('ANIMAL_FORM');
      formConfig.buttonConfig.label = "Add";
      this.sliderTitle='Add'
      this.selectedAnimalData = null;
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
      this.sliderTitle='Edit';
      const selectedId= Array.from(this.selectedIds)[0];
      if (!selectedId) {
        this.selectedAnimalData = null;
        return;
      }
      const animalRecord = this.animals.find((animal: Animal) => animal._id === selectedId);
      if(animalRecord) {
        this.selectedAnimalData = {...animalRecord};
      }
      this.isAnimalOpen = true;
    }
  }

  handleActivitySubmit(acivity: any) {}

  openActivity(){
    const activityFormConfig:any = this.formconfig.getFormConfig('RECENT_ACTIVITY_FORM');
    this.recentAcitivitySignal.set(activityFormConfig);
    this.sliderTitle = activityFormConfig.title;
    this.isRecentActivity = true;
  }

  logout () {
    this.store.dispatch(LOGOUT())
  }

  ngOnDestroy () {}
}
