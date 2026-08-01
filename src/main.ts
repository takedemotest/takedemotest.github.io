import { initFederation } from '@angular-architects/native-federation';

initFederation({ 
  // farmOperations: 'http://localhost:4201/remoteEntry.json',
  expenseRevenue: 'https://takedemotest.github.io/expense-revenue/remoteEntry.json'
})
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
