export interface Animal {
  _id: string;
  name: string;
  type: string;
  milkProduction: number;
}

export interface AnimalState{
    animals:Animal[];
    loading:boolean;
}