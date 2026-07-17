import { NavCategory } from '../../../../projects/shared-ui/src/lib/models/navigation-model';

export const SIDEBAR_NAVIGATION: NavCategory[] = [
  {
    items: [
      { 
        label: 'Dashboard', 
        icon: 'notification', 
        route: '/dashboard',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      }
    ]
  },
  {
    categoryName: 'FARM OPERATIONS',
    items: [
      { 
        label: 'Farms', 
        icon: 'notification', 
        route: '/operations/farms',
        roleAllowed: ['ADMIN', 'OWNER']
      },
      { 
        label: 'Fields', 
        icon: 'notification', 
        route: '/operations/fields',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
      { 
        label: 'Crops', 
        icon: 'notification', 
        route: '/operations/crops',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
      { 
        label: 'Activities', 
        icon: 'notification', 
        route: '/operations/activities',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      }
    ]
  },
  {
    categoryName: 'LIVESTOCK',
    items: [
      { 
        label: 'Animals', 
        icon: 'notification', 
        route: '/livestock/animals',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER', 'VET']
      },
      { 
        label: 'Breeding', 
        icon: 'notification', 
        route: '/livestock/breeding',
        roleAllowed: ['ADMIN', 'OWNER', 'VET']
      },
      { 
        label: 'Health', 
        icon: 'notification', 
        route: '/livestock/health',
        roleAllowed: ['ADMIN', 'OWNER', 'VET']
      },
      { 
        label: 'Milk Production', 
        icon: 'notification', 
        route: '/livestock/milk',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      }
    ]
  },
  {
    categoryName: 'INVENTORY',
    items: [
      { 
        label: 'Feed / Seed', 
        icon: 'notification', 
        route: '/inventory/feed-seed',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
      { 
        label: 'Fertilizer / Medicine', 
        icon: 'notification', 
        route: '/inventory/fertilizer-medicine',
        roleAllowed: ['ADMIN', 'OWNER', 'VET']
      }
    ]
  },
  {
    categoryName: 'FINANCE',
    items: [
      { 
        label: 'Expense / Revenue', 
        icon: 'notification', 
        route: '/finance/ledger',
        roleAllowed: ['ADMIN', 'OWNER'] // Hidden completely from regular workers
      },
      { 
        label: 'Settings', 
        icon: 'notification', 
        route: '/settings',
        roleAllowed: ['ADMIN', 'OWNER']
      }
    ]
  }
];


export const PROFILE_NAV: NavCategory[] = [
  {
    items: [
      { 
        label: 'Profile', 
        icon: 'profile', 
        route: '/profile',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
       { 
        label: 'Support', 
        icon: 'help', 
        route: '/support',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
       { 
        label: 'Setting', 
        icon: 'setting', 
        route: '/setting',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
       { 
        label: 'logout', 
        icon: 'logout', 
        route: '/logout',
        action:'logout',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      }
    ]
  },]