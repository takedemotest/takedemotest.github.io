import { TemplateRef } from "@angular/core";
import { CardConfig } from "@takedemotest/krishito-ui-card";


interface TasksReport{
    todayDue:TemplateRef<any>;
    overdue:TemplateRef<any>;
    completed:TemplateRef<any>;
}

export const  TASKS_REPORT_CONFIG=(templates: TasksReport): CardConfig[] => [
  {
    id: `Due Today`,
    title: `Today Due`,
    showHeader: true,
    hasBodyContent:templates.todayDue
  },
  {
    id: 'Over Due',
    title: 'Over Due',
    showHeader: true,
    hasBodyContent:templates.overdue
  },
  {
    id: 'Completed',
    title: 'Completed',
    showHeader: true,
    hasBodyContent:templates.completed
  }
]