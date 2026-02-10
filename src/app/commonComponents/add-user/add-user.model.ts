export interface addNewUser{
    readonly id: string,
    name: string,
    email:string,
    role:userRole,
    createdAt:Date
}
export type userRole = 'Admin' | 'User';
