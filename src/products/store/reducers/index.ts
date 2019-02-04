import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductState = createFeatureSelector<ProductsState>(
  'products'
);

// pizza state
export const getPizzaState = createSelector(
  getProductState,
  (state: ProductsState) => state.pizzas // when we're inside here (state.pizzas) where inside the pizzas reducer
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
