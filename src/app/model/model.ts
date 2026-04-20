export interface User {
    id: string;
    email: string;
    name: string;
    password?:string;
}

export interface Task{
      userId: number;
        id: number;
        title: string;
        completed: boolean;
}