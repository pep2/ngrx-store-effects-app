import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';
import {of} from "rxjs/observable/of";

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions,
              private pizzaService: fromServices.PizzasService) {}

  @Effect()
  loadPizza$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(                                   
      switchMap(() => {
        return this.pizzaService.getPizzas().pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        )
      })
    );
}

