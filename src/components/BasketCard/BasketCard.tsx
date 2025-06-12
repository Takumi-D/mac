import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import './BasketCard.scss';

import { BasketProduct, Ingredients } from '../../types';

interface ProductBasketCard {
  product: BasketProduct;
}

function BasketCard({ product }: ProductBasketCard) {
  const dispatch = useDispatch();
  return (
    <div key={product.id} className='basket-card'>
      <div className='basket-card-wrapper'>
        <div className='basket-card__wrapper-img'>
          <img
            className='basket-card__img'
            src={`../img/${product.img}.png`}
            alt='product'
          />
        </div>
      </div>
      <div className='basket-card__wrapper-content'>
        <div className='basket-card__info'>
          <div className='basket-card__titile'>{product.name}</div>
          {product.ingredients?.map((additionalIngredients: Ingredients) => {
            return (
              <div
                key={additionalIngredients.name}
                className='basket-card__additionalIngredients'
              >
                {additionalIngredients.name}
              </div>
            );
          })}
          <div className='basket-card__wrapper-price'>
            <div className='basket-card__price'>
              {product.price * product.counter}р
            </div>
            <div className='basket-card__dot'>·</div>
            <div className='basket-card__gram'>{product.gram}&nbsp;г</div>
          </div>
        </div>
      </div>
      <div className='basket-card__wrapper-counter'>
        <div className='basket-card__counter'>
          <button
            className='basket-card__counter-btn'
            onClick={() => {
              dispatch({
                type: 'DELETE_PRODUCT',
                payload: {
                  ...product,
                },
              });
            }}
          >
            -
          </button>
          <b className='basket-card__counter-value'>{product.counter}</b>
          <button
            className='basket-card__counter-btn'
            onClick={() => {
              dispatch({
                type: 'ADD_PRODUCT',
                payload: {
                  ...product,
                  counter: 1,
                },
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(BasketCard);
