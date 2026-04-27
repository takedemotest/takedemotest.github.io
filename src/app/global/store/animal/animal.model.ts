export interface Animal {
  _id: string;
  name: string;
  type: string;
  milkProduction: number;
  age:number;
  healthStatus:string;
}

export interface AnimalState{
    animals:Animal[];
    loading:boolean;
}