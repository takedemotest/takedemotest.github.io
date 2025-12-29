import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    users = [
        { name: 'Rahul', email: 'rahul@test.com' },
        { name: 'Amit', email: 'amit@test.com' },
        { name: 'Sneha', email: 'sneha@test.com' }
];
}
