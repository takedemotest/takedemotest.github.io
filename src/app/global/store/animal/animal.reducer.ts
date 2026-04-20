import { createReducer, on } from "@ngrx/store";
import * as AnimalAction from './animal.actions';
import { AnimalState } from './animal.model';

export const initialState: AnimalState = {
  animals: [],
  loading: false
};

export const animalReducer = createReducer(

  initialState,

  on(AnimalAction.loadAnimals, state => ({
    ...state,
    loading: true
  })),

  on(AnimalAction.loadAnimalsSuccess, (state, { animals }) => ({
    ...state,
    animals,
    loading: false
  })),

  on(AnimalAction.addAnimalSuccess, (state, { animal }) => ({
    ...state,
    animals: [...state.animals, animal]
  })),

  on(AnimalAction.updateAnimalSuccess, (state, { animal }) => ({
    ...state,
    animals: state.animals.map(a =>
      a._id === animal._id ? animal : a
    )
  })),

  on(AnimalAction.deleteAnimalSucess, (state, { id }) => ({
    ...state,
    animals: state.animals.filter(a => a._id !== id)
  }))
);