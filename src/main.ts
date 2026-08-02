import { initFederation } from '@angular-architects/native-federation';

initFederation({ 
  farmOperations: 'https://takedemotest.github.io/farmOperations/remoteEntry.json',
  expenseRevenue: 'https://takedemotest.github.io/expense-revenue/remoteEntry.json'
})
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
