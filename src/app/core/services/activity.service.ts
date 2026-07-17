import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment.prod";
import { ActivityItem } from "../../../../projects/shared-ui/src/lib/models/activity-model";

@Injectable({
    providedIn:'root'
})

export class ActivityService {  

    //private http = Inject(HttpClient);
    private BASE_URL = `${environment.apiUrl}`;

     constructor(private http: HttpClient) {}

    public activitiesSignal = signal<ActivityItem[]>([]);
    public loadRecentActivities(): void{
        this.http.get<ActivityItem[]>(`${this.BASE_URL}/activities`).subscribe({
            next: (response) => {
                this.activitiesSignal.set(response);
            },
            error: (error) => {
                console.error('Error fetching recent activities:', error);
            }
        });
    }
    public addActivity(activity: ActivityItem): void {
        this.http.post<ActivityItem>(`${this.BASE_URL}/activities`, activity).subscribe({
            next: (response) => {
                const currentActivities = this.activitiesSignal();
                this.activitiesSignal.set([response, ...currentActivities]);
            },
            error: (error) => {
                console.error('Error adding activity:', error);
            }
        });
}
}