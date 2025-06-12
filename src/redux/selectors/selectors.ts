import { createSelector } from 'reselect';

import { BasketProduct, Product } from '../../types';
import { InitState } from '../redusers/reducer';

interface State {
  reducer: InitState;
}

const state = (state: State) => state.reducer;

const dataSelector = createSelector(
  state,
  (reducer: InitState) => reducer.data,
);

const dataSelectorItem = createSelector(
  dataSelector,
  (_, id: number) => id,
  (data: Product[], id: number): Product => {
    return data.find((product: Product) => product.id === id);
  },
);

const selectedProductSelector = createSelector(
  state,
  (reducer: InitState) => reducer.selectedProduct,
);

const statusModalSelector = createSelector(
  state,
  (reducer: InitState) => reducer.statusModal,
);

const basketSelector = createSelector(
  state,
  (reducer: InitState) => reducer.basket,
);

const basketSelectorItem = createSelector(
  basketSelector,
  (_, id: number) => id,
  (basket: BasketProduct[], id: number): BasketProduct => {
    return basket.findLast((product: Product) => product.id === id);
  },
);

const counterBasketSelectorItem = createSelector(
  basketSelector,
  (_, id: number) => id,
  (basket: BasketProduct[], id: number): number => {
    let sum = 0;
    basket
      .filter((product: BasketProduct) => product.id === id)
      .forEach((product: BasketProduct) => {
        sum += product.counter;
      });
    return sum;
  },
);

const mainPriceBasketSelector = createSelector(
  basketSelector,
  (basket: BasketProduct[]) => {
    let sum = 0;
    basket.forEach((basket: BasketProduct) => {
      sum += basket.price * basket.counter;
    });
    return sum;
  },
);

export {
  dataSelector,
  selectedProductSelector,
  statusModalSelector,
  basketSelector,
  basketSelectorItem,
  dataSelectorItem,
  counterBasketSelectorItem,
  mainPriceBasketSelector,
};
