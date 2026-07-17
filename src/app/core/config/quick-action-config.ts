import { TemplateRef } from '@angular/core';
import { CardConfig } from '../../../../projects/shared-ui/src/lib/models/card-model';

interface DashboardQuickAction{
  invoice:TemplateRef<any>;
}

export const dashboardQuickActions = (templates:DashboardQuickAction): CardConfig[] => [
 
  {
    id: 'ACTION_ADD_ANIMAL',
    title: 'Add Animal',
    subtitle: 'Register new animal',
    icon: 'add_box',
    isClickable: true,
    showHeader: true,
    showFooter: false,
    body:'testing body tang'
  },
  {
    id: 'ACTION_ADD_ACTIVITY',
    title: 'Add Activity',
    subtitle: 'Log farm activity',
    icon: 'bolt',
    isClickable: true,
    showHeader: true,
    showFooter: false,
  },
  {
    id: 'ACTION_CREATE_INVOICE',
    title: 'Create Invoice',
    subtitle: 'Generate invoice',
    icon: 'receipt_long',
    isClickable: true,
    showHeader: true,
    showFooter: false,
    hasBodyContent:templates.invoice
  },
  {
    id: 'ACTION_ADD_EXPENSE',
    title: 'Add Expense',
    subtitle: 'Record expense',
    icon: 'payments',
    isClickable: true,
    showHeader: true,
    showFooter: false,
  },
];
