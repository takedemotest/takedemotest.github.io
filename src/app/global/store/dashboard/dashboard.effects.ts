import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOAD_STATS, LOAD_STATS_FAILURE, LOAD_STATS_SUCCESS } from "./dashboard.actions";
import { ApiService } from "../../../core/services/api.service";
import { catchError, map, switchMap } from "rxjs/operators";
import { inject, Injectable } from "@angular/core";
import { of } from "rxjs";


@Injectable()
export class DashboardEffects{

  private actions$ = inject(Actions);
  private api = inject(ApiService);

loadStats$ = createEffect(()=>
   this.actions$.pipe(
     ofType(LOAD_STATS),
     switchMap(()=>
        this.api.getDashboardStats().pipe(
            map(stats =>
              LOAD_STATS_SUCCESS({stats})  
            ),
            catchError(error=>
              of(LOAD_STATS_FAILURE({error}))
            )
        )
    )
    )
);
}