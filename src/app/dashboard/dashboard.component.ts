import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CardsComponent } from '../commonComponents/cards/cards.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LOGOUT } from '../global/store/auth/auth.actions';

@Component({
  selector: 'app-dashboard',
  imports: [CardsComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    users = [
        { name: 'Rahul', email: 'rahul@test.com' },
        { name: 'Amit', email: 'amit@test.com' },
        { name: 'Sneha', email: 'sneha@test.com' }
];

titleName = 'Employee'

employees$ = new Subject<any[]>();

    constructor(private store: Store) {
      //this.employees$.next(["john", "doe", "smith", "jane", "david", "emily", "michael", "sarah", "chris", "laura"]);
        // Simulate fetching data and emitting it
        setTimeout(() => {
            this.employees$.next(this.users);
        }, 1000);
    }

    ngOnInit() {
      this.employees$.subscribe(data => {
        console.log('Employees data received:', data);
      });
    }

    logout(){
      this.store.dispatch(LOGOUT());
    }
    
}
