export interface SickRecord {
    sickDate: string;
    disease: string;
}

export interface DiaryData {
    id: string;
    cowName: string;
    milk: number;
    lastFill: string;
    healthHistory: SickRecord[]; 
}

export const DUMMY_DAIRY_DATA:DiaryData[] = [
    {
        id:"01",
        cowName:'alfa1',
        milk:30,
        lastFill:'15/02/2025',
        healthHistory:[{
            sickDate:'15/02/2025',
            disease:'no history'
        }]
    }
]