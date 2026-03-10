export interface User {
    id: string;
    email: string;
    name: string;
}

export interface Task{
      userId: number;
        id: number;
        title: string;
        completed: boolean;
}