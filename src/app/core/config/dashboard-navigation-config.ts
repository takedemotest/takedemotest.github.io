import { NavCategory } from "@takedemotest/krishito-ui-navigation";


export const SIDEBAR_NAVIGATION: NavCategory[] = [
  {
    items: [
      { 
        label: 'Dashboard', 
        icon: 'warning', 
        route: '/dashboard',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
       { 
        label: 'Tasks', 
        icon: 'warning', 
        route: '/task',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      }
    ]
  },
  {
    categoryName: 'FARM OPERATIONS',
    items: [
    
      { 
        label: 'Fields', 
        icon: 'warning', 
        route: '/fields',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
      { 
        label: 'Crops', 
        icon: 'warning', 
        route: '/crops',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
      { 
        label: 'Activities', 
        icon: 'warning', 
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
        icon: 'warning', 
        route: '/livestock/animals',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER', 'VET']
      },
      { 
        label: 'Breeding', 
        icon: 'warning', 
        route: '/livestock/breeding',
        roleAllowed: ['ADMIN', 'OWNER', 'VET']
      },
      { 
        label: 'Health', 
        icon: 'warning', 
        route: '/livestock/health',
        roleAllowed: ['ADMIN', 'OWNER', 'VET']
      },
      { 
        label: 'Production', 
        icon: 'warning', 
        route: '/livestock/milk',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      }
    ]
  },
  {
    categoryName: 'INVENTORY',
    items: [
      { 
        label: 'physical Inventory', 
        icon: 'warning', 
        route: '/physicalInventory',
        roleAllowed: ['ADMIN', 'OWNER', 'WORKER']
      },
      { 
        label: 'Operational Utility Resources', 
        icon: 'warning', 
        route: '/OperationalUtilityResources',
        roleAllowed: ['ADMIN', 'OWNER', 'VET']
      }
    ]
  },
  {
    categoryName: 'FINANCE',
    items: [
      { 
        label: 'Expense / Revenue', 
        icon: 'warning', 
        route: '/expenseRevenue',
        roleAllowed: ['ADMIN', 'OWNER'] // Hidden completely from regular workers
      },
      { 
        label: 'Settings', 
        icon: 'warning', 
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