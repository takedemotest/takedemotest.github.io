import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../../core/services/api.service";
import { inject, Injectable } from "@angular/core";
import { map, switchMap } from "rxjs/operators";
import { addAnimal, addAnimalSuccess, deleteAnimal, deleteAnimalSucess, loadAnimals, loadAnimalsSuccess, updateAnimal, updateAnimalSuccess } from "./animal.actions";

@Injectable()
export class AnimalEffects {

        private actions$= inject(Actions)
        private api= inject(ApiService) 

  constructor() {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAnimals),
      switchMap(() =>
        this.api.getAnimals().pipe(
          map(res => loadAnimalsSuccess({ animals: res }))
        )
      )
    )
  );

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addAnimal),
      switchMap(action =>
        this.api.addAnimal(action.animal).pipe(
          map(res => addAnimalSuccess({ animal: res }))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAnimal),
      switchMap(action =>
        this.api.updateAnimal(action.animal).pipe(
          map(res => updateAnimalSuccess({ animal: res }))
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAnimal),
      switchMap(action =>
        this.api.deleteAnimal(action.id).pipe(
          map(() => deleteAnimalSucess({ id: action.id }))
        )
      )
    )
  );
}