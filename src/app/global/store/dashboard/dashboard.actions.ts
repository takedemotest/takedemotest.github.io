import { createAction, props } from "@ngrx/store";

export const LOAD_STATS = createAction(
    '[Dashboard] Load Stats'
);

export const LOAD_STATS_SUCCESS = createAction(
    '[Dashboard] Load Stats Success',
    props<{stats:any}>()
)

export const LOAD_STATS_FAILURE = createAction(
    '[Dashboard] Load Stats Failure',
    props<{error:any}>()
)