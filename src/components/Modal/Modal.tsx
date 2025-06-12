import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectedProductSelector } from '../../redux/selectors/selectors';

import './Modal.scss';
import { AdditionalIngredients, Ingredients, Product } from '../../types';

function Modal() {
  const [counter, setCounter] = useState(1);
  const [options, setOptions] = useState([]);
  const [priceModal, setPriceModal] = useState(null);

  const dispatch = useDispatch();
  const product: Product = useSelector(selectedProductSelector);

  useEffect(() => {
    setPriceModal(product.price);
  }, [product]);

  return (
    <div className='freeze-modal'>
      <div className='modal'>
        <div className='modal-content'>
          <div
            onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
            className='close-modal'
          >
            ⨉
          </div>
          <div className='modal-content__main'>
            <div className='modal-content__first-column'>
              <img
                className='modal-content__img'
                src={`../img/${product.bigImg}`}
                alt='product'
              />
            </div>
            <div className='modal-content__second-column'>
              <div className='modal-content__header'>
                <div className='modal-content__wrapper-title'>
                  <h1 className='modal-content__title'>{product.name}</h1>
                  <span className='modal-content__gram'>{product.gram} г.</span>
                </div>
                {counter > 1 && (
                  <p className='modal-content__main-price'>{priceModal}р</p>
                )}
                <div
                  className={
                    product.additionalIngredients
                      ? 'modal-content__wrapper-add border-line'
                      : 'modal-content__wrapper-add'
                  }
                >
                  <div className='modal-content__price'>
                    {priceModal * counter}
                    <span className='modal-content__price_currency'>р</span>
                  </div>
                  <div className='modal-content__counter counter'>
                    <button
                      onClick={() =>
                        setCounter((counter) => {
                          if (counter <= 1) {
                            return counter;
                          } else {
                            return counter - 1;
                          }
                        })
                      }
                      className='counter__btn'
                    >
                      -
                    </button>
                    <div className='counter__value'>{counter}</div>
                    <button
                      onClick={() => setCounter((counter) => counter + 1)}
                      className='counter__btn'
                    >
                      +
                    </button>
                  </div>
                  <button
                    className='add-btn'
                    onClick={() => {
                      dispatch({
                        type: 'ADD_PRODUCT',
                        payload: {
                          ...product,
                          counter: counter,
                          price: priceModal,
                          ingredients:
                            product.additionalIngredients === null
                              ? null
                              : options,
                        },
                      });
                      dispatch({ type: 'CLOSE_MODAL' });
                    }}
                  >
                    Добавить
                  </button>
                </div>
              </div>

              {product.additionalIngredients?.map(
                (options: AdditionalIngredients) => {
                  return (
                    <div key={options.title} className='listOfOptions'>
                      <div className='listOfOptions__title'>
                        {options.title}
                        <span className='listOfOptions__counter'>
                          Выбирите до&nbsp;
                          {options?.ingredients.length}
                        </span>
                      </div>
                      {options?.ingredients.map((ingredients: Ingredients) => {
                        return (
                          <label
                            key={ingredients.name}
                            className='listOfOptions__label'
                          >
                            <div className='listOfOptions__label-text'>
                              {ingredients.name}
                              <span className='listOfOptions__label-text_price'>
                                +&nbsp;{ingredients.price}&nbsp;р
                              </span>
                            </div>
                            <div className='listOfOptions__wrapper-checkbox'>
                              <input
                                onClick={() => {
                                  setOptions((state) => {
                                    const indexIngredient = state.findIndex(
                                      (item) => item.name === ingredients.name,
                                    );

                                    const newState =
                                      indexIngredient === -1
                                        ? [...state, ingredients]
                                        : [
                                            ...state.slice(0, indexIngredient),
                                            ...state.slice(indexIngredient + 1),
                                          ];

                                    const priceChange =
                                      indexIngredient === -1
                                        ? ingredients.price
                                        : -ingredients.price;

                                    setPriceModal(
                                      (prev: number): number =>
                                        prev + priceChange,
                                    );

                                    return newState;
                                  });
                                }}
                                className='listOfOptions__checkbox'
                                type='checkbox'
                              />
                              <div className='listOfOptions__wrapper-icon'>
                                <svg
                                  className='listOfOptions__icon'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  color='#21201F'
                                  role='img'
                                  aria-hidden='true'
                                >
                                  <path
                                    fill='currentColor'
                                    d='m10.003 19-7.5-7.5 1.498-1.501 6.001 6.06 9.5-9.563 1.5 1.5z'
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  );
                },
              )}
            </div>
          </div>
          <div className='modal-content__footer'>
            <div className='modal-content__description'>
              <h3 className='modal-content__description-title'>Состав</h3>
              <p className='modal-content__description-text'>
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Modal);
