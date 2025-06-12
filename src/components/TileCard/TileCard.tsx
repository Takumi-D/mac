import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './TileCard.scss';
import {
  basketSelectorItem,
  counterBasketSelectorItem,
  dataSelectorItem,
} from '../../redux/selectors/selectors';
import { BasketProduct, Product } from '../../types';

function TileCard({ img, price, name, gram, id }: any) {
  const dispatch = useDispatch();
  const basketItem: BasketProduct = useSelector((state: any): any =>
    basketSelectorItem(state, id),
  );
  const dataItem: Product = useSelector((state: any): any =>
    dataSelectorItem(state, id),
  );

  const counterBasketItem: number = useSelector((state: any): any =>
    counterBasketSelectorItem(state, id),
  );

  return (
    <div className='wrapper-TileCard'>
      <div
        onClick={(event: any) => {
          if (
            event.target.parentElement.classList.value !==
            'TileCard__wrapper-btn'
          ) {
            dispatch({ type: 'OPEN_MODAL', payload: id });
          }
        }}
        className='TileCard'
      >
        <div className='TileCard__card-img'>
          <img
            className='TileCard__img'
            src={`../img/${img}.png`}
            alt='product'
          />
        </div>
        <div className='TileCard__description'>
          <h4 className='TileCard__price'>{price}р</h4>
          <p className='TileCard__name-product'>{name}</p>
          <p className='TileCard__gram'>{gram} г</p>
        </div>
        <div className='TileCard__wrapper-btn'>
          {basketItem === undefined ? (
            <>
              <button
                className='TileCard__btn-add'
                onClick={() => {
                  if (dataItem?.additionalIngredients !== null) {
                    dispatch({ type: 'OPEN_MODAL', payload: id });
                  } else {
                    dispatch({
                      type: 'ADD_PRODUCT',
                      payload: {
                        ...dataItem,
                        counter: 1,
                      },
                    });
                  }
                }}
              >
                Добавить
              </button>
            </>
          ) : null}
          {counterBasketItem > 0 ? (
            <>
              <button
                className='TileCard__btn-counter'
                onClick={() => {
                  dispatch({
                    type: 'DELETE_PRODUCT',
                    payload: {
                      ...basketItem,
                    },
                  });
                }}
              >
                -
              </button>
              <div className='TileCard__counter'>{counterBasketItem}</div>
              <button
                onClick={() => {
                  if (basketItem?.additionalIngredients === null) {
                    dispatch({
                      type: 'ADD_PRODUCT',
                      payload: {
                        ...basketItem,
                        counter: 1,
                      },
                    });
                  } else {
                    dispatch({ type: 'OPEN_MODAL', payload: id });
                  }
                }}
                className='TileCard__btn-counter'
              >
                +
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default memo(TileCard);
