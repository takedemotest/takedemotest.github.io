import { TemplateRef } from '@angular/core';
import { CardConfig } from '../../../../projects/shared-ui/src/lib/models/card-model';


export const DASHBOARD_QUICK_ACTIONS: CardConfig[] = [
 
  {
    id: 'ACTION_ADD_ANIMAL',
    title: 'Add Animal',
    subtitle: 'Register new animal',
    icon: 'warning',
    isClickable: true,
    showHeader: true
  },
  {
    id: 'ACTION_ADD_ACTIVITY',
    title: 'Add Activity',
    subtitle: 'Log farm activity',
    icon: 'warning',
    isClickable: true,
    showHeader: true,
  },
  {
    id: 'ACTION_CREATE_INVOICE',
    title: 'Create Invoice',
    subtitle: 'Generate invoice',
    icon: 'warning',
    isClickable: true,
    showHeader: true,
  },
  {
    id: 'ACTION_ADD_EXPENSE',
    title: 'Add Expense',
    subtitle: 'Record expense',
    icon: 'warning',
    isClickable: true,
    showHeader: true,
  },
];
