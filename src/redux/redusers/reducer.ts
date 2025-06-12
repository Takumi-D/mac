import { productSearch } from '../../api/auxiliaryFunctions';

import { BasketProduct, Product } from '../../types';

interface InitState {
  data: Product[] | null;
  basket: BasketProduct[] | null;
  selectedProduct: Product | null;
  statusModal: boolean;
}

const initState: InitState = {
  data: null,
  basket: [],
  selectedProduct: null,
  statusModal: false,
};

function reducer(state: InitState = initState, action: any) {
  switch (action.type) {
    case 'INIT_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'ADD_PRODUCT': {
      let repeatElement = false;
      let findingAnElementInAnArray: number | null = null;

      findingAnElementInAnArray = state.basket.findIndex(
        (element: BasketProduct) => {
          return element.name === action.payload.name;
        },
      );

      if (findingAnElementInAnArray === -1) {
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
      }

      if (
        action.payload?.ingredients !== null &&
        action.payload?.ingredients?.length > 0
      ) {
        const { findingAnElementInAnArrayF, repeatElementF } = productSearch(
          state,
          action,
        );
        repeatElement = repeatElementF;
        findingAnElementInAnArray = findingAnElementInAnArrayF;
      } else {
        findingAnElementInAnArray = state.basket.findIndex(
          (element: BasketProduct) => {
            return (
              element.name === action.payload.name &&
              element?.ingredients?.length ===
                action.payload?.ingredients?.length
            );
          },
        );
        if (findingAnElementInAnArray !== -1) {
          repeatElement = true;
        }
      }

      if (repeatElement) {
        return {
          ...state,
          basket: [
            ...state.basket.slice(0, findingAnElementInAnArray),
            {
              ...action.payload,
              counter:
                state.basket[findingAnElementInAnArray].counter +
                action.payload.counter,
            },
            ...state.basket.slice(findingAnElementInAnArray + 1),
          ],
        };
      }

      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    }
    case 'DELETE_PRODUCT': {
      let findingAnElementInAnArray: number | null = null;
      findingAnElementInAnArray = state.basket.findIndex(
        (element: BasketProduct) => {
          return element?.name === action?.payload?.name;
        },
      );

      if (findingAnElementInAnArray === -1) {
        return {
          ...state,
        };
      }

      if (action.payload.ingredients !== null) {
        const { findingAnElementInAnArrayF } = productSearch(state, action);
        findingAnElementInAnArray = findingAnElementInAnArrayF;
      }

      if (state.basket[findingAnElementInAnArray].counter === 1) {
        return {
          ...state,
          basket: [
            ...state.basket.slice(0, findingAnElementInAnArray),
            ...state.basket.slice(findingAnElementInAnArray + 1),
          ],
        };
      } else {
        return {
          ...state,
          basket: [
            ...state.basket.slice(0, findingAnElementInAnArray),
            {
              ...action.payload,
              counter: state.basket[findingAnElementInAnArray].counter - 1,
            },
            ...state.basket.slice(findingAnElementInAnArray + 1),
          ],
        };
      }
    }
    case 'OPEN_MODAL':
      return {
        ...state,
        selectedProduct:
          state.data[
            state.data.findIndex(
              (element: Product) => element.id === action.payload,
            )
          ],
        statusModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        statusModal: false,
        selectedProduct: null,
      };
    case 'CLEANING_THE_BASKET':
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
}

export { InitState };

export default reducer;
