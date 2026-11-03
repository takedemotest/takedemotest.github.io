import { Component, signal, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { CardConfig, CardsComponent } from '@takedemotest/krishito-ui-card';
import { TASKS_REPORT_CONFIG } from '../core/config/tasks-config';

@Component({
  selector: 'taskReport',
  imports: [CardsComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
 public taskNotification = signal<CardConfig[]>([])

 @ViewChild('dueToday') dueToday!: TemplateRef<any>;
 @ViewChild('overdue') overdue!: TemplateRef<any>;
 @ViewChild('completed') completed!: TemplateRef<any>;

 ngAfterViewInit() {
   const tasksReportConfig = TASKS_REPORT_CONFIG({  
        todayDue:this.dueToday,
        overdue:this.overdue,
        completed:this.completed
 })
  this.taskNotification.set(tasksReportConfig)
}
}
