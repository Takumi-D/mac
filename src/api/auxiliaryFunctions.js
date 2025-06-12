function productSearch(state, action) {
  let findingAnElementInAnArrayF = null;
  let repeatElementF = false;

  state.basket?.forEach((product, index) => {
    if (product.ingredients === null) {
      return;
    }
    const arr2 = action.payload.ingredients?.length;

    const coincidence = product?.ingredients?.filter((item) => {
      return action.payload?.ingredients?.some((item2) => {
        return item.name === item2.name;
      });
    });

    if (
      coincidence?.length === product?.ingredients?.length &&
      coincidence?.length === arr2 &&
      product.name === action.payload.name
    ) {
      findingAnElementInAnArrayF = index;
      repeatElementF = true;
    }
  });

  return { findingAnElementInAnArrayF, repeatElementF };
}

export { productSearch };
