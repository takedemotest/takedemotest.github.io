import { createAction, props } from "@ngrx/store";

export const loadAnimals= createAction('[Animals] Load');
export const loadAnimalsSuccess = createAction(
    '[Animals] Load success',
    props<{animals:any}>()
)

export const addAnimal = createAction(
    '[Animals] Create',
    props<{animal:any}>()
)

export const addAnimalSuccess = createAction(
    '[Animal] Add success',
    props<{animal:any}>()
)

export const updateAnimal = createAction(
    '[Animals] Update',
    props<{animal:any}>()
)

export const updateAnimalSuccess = createAction(
    '[Animals] Update Success',
    props<{animal:any}>()
)

export const deleteAnimal = createAction(
    '[Animals] Delete',
    props<{id:any}>()
)

export const deleteAnimalSucess = createAction(
    '[Animals] Delete Success',
    props<{id:any}>()
)