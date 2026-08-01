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

import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { Task } from '../model/model'
import { LOAD_STATS } from '../global/store/dashboard/dashboard.actions'
import { ChartConfiguration } from 'chart.js'
import { selectDashboardStates } from '../global/store/dashboard/dashboard.selectors'
import { MatIconModule } from '@angular/material/icon'
import { AnimalService } from '../core/services/animal.service'
import { addAnimal, deleteAnimal, loadAnimals, updateAnimal } from '../global/store/animal/animal.actions'
import { Animal } from '../global/store/animal/animal.model'
import { selectAnimals } from '../global/store/animal/animal.selectors'
import { FormRegisterService } from '../core/services/form-register.service'
import { selectUser } from '../global/store/auth/auth.selectors'
import { ResponsiveService } from '../core/services/responsive-service.service'
import { RECENT_ACTIVITY_CONFIG } from '../core/config/recent-activity-config'
import { DASHBOARD_SVG_ICONS } from '../core/config/dashboard-svg-icon'
import { TASK_NOTIFICATION_CONFIG } from '../core/config/task-notification-config'
import { DASHBOARD_QUICK_ACTIONS } from '../core/config/quick-action-config'
import {CardConfig, CardsComponent} from '@takedemotest/krishito-ui-card'
import { IconService } from '@takedemotest/krishito-ui-icons'
import { DynamicFormComponent, FormConfig } from '@takedemotest/krishito-ui-form'
import { SliderDrawerComponent } from '@takedemotest/krishito-ui-slider'
import { GraphComponent } from '@takedemotest/krishito-ui-graph'
@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormComponent,
    GraphComponent,
    MatIconModule,
    SliderDrawerComponent,
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

  public iconService = inject(IconService)

  animals:any;
  public animals$ = this.store.select(selectAnimals);
  selectedIds = new Set<string>();

  public activePlugin = signal<any>(null);
  public recentAcitivitySignal = signal<any>(null);

 
  

  public quickActions = signal<CardConfig[]>(DASHBOARD_QUICK_ACTIONS);
  public taskNotification = signal<CardConfig[]>([]);


  constructor ( private cdr:ChangeDetectorRef,private animalService: AnimalService, public responsive:ResponsiveService) {
        this.iconService.registerIcons(DASHBOARD_SVG_ICONS);
  }


  @ViewChild('milkProduction') milkProductionTemplate!: TemplateRef<any>;
  @ViewChild('inventoryAlerts') inventoryAlertsTemplate!: TemplateRef<any>;
  @ViewChild('upcomingTasks') upcomingTasksTemplate!: TemplateRef<any>; 

  

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
}

  ngAfterViewInit(){
  
      const taskNotificationConfig = TASK_NOTIFICATION_CONFIG({
        milkProduction: this.milkProductionTemplate,
        inventoryAlerts: this.inventoryAlertsTemplate,
        upcomingTasks: this.upcomingTasksTemplate
      });
      this.taskNotification.set(taskNotificationConfig);
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

 

  ngOnDestroy () {}
}
