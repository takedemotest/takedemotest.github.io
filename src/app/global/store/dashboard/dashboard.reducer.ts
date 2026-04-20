import { createReducer, on } from "@ngrx/store";
import { LOAD_STATS, LOAD_STATS_FAILURE, LOAD_STATS_SUCCESS } from "./dashboard.actions";

export interface DashboardState{
    stats:any;
    loading:boolean;
    error:any;
}

export const instialState:DashboardState ={
    stats:{milkProduction:[], animalDistribution:{}},
    loading:true,
    error:null
}

export const dashboardState = createReducer(
        instialState,
        on(LOAD_STATS, state=>({
            ...state,
            loading:true
        })),
        on(LOAD_STATS_SUCCESS, (state,{stats})=>({
            ...state,
            stats,
            loading:false
        })),
        on(LOAD_STATS_FAILURE, (state, {error})=>({
            ...state,
            error,
            loading:false
        }))
)