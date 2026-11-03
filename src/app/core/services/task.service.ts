import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Task{
    id?:string;
    title:string;
    source: string;
    relatedTo?: string;
    dueDate: string;
    assignedTo?: string;
    status: 'UPCOMING' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE';
    createdAt?: string;
}

export interface TaskDashboardResponse {
    metrics:{
        dueToday: number;
        overdue: number;
        completed: number;
    }
    tasks: Task[];
}

@Injectable({   
    providedIn: 'root'
})

export class TaskService {
    private http = inject(HttpClient);
    private baseUrl = 'http://localhost:5000/api/tasks';

    getTasksDashboard(): Observable<TaskDashboardResponse> {
            return this.http.get<TaskDashboardResponse>(`${this.baseUrl}/dashboard`);
    }
    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.baseUrl, task);
    }
    
}