import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  basketSelector,
  mainPriceBasketSelector,
} from '../../redux/selectors/selectors';

import './Basket.scss';
import BasketCard from '../BasketCard';

import { BasketProduct } from '../../types';

function Basket() {
  const dispatch = useDispatch();
  const basket: BasketProduct[] = useSelector(basketSelector);
  const mainPrice = useSelector(mainPriceBasketSelector);

  const emptyCart = basket.length === 0;

  return (
    <div className='wrapper-basket'>
      <div className='basket'>
        <div className='basket__content'>
          <div className='basket__header'>
            <h2 className='basket__title'>Корзина</h2>
            <button
              className='basket__btn-clear'
              onClick={() => dispatch({ type: 'CLEANING_THE_BASKET' })}
            >
              Очистить
            </button>
          </div>
          <div className='basket__main'>
            <div className='basket__content'>
              {emptyCart && <div>Корзина пустая</div>}
              {basket?.map((item: BasketProduct) => {
                return (
                  <BasketCard
                    key={`${item.id}${item?.ingredients
                      ?.map((item2: any) => item2.name)
                      .join('')}`}
                    product={item}
                  />
                );
              })}
            </div>
            {emptyCart ? null : (
              <div className='basket__footer'>
                <button className='basket__btn'>
                  <span className='basket__content-btn'>
                    <span className='basket__text-btn'>Далее</span>
                    <span className='basket__price-btn'>{mainPrice}р</span>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Basket);
