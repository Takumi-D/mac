import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TileCard from '../TileCard';

import { dataSelector } from '../../redux/selectors/selectors';
import Services from '../../services';

import './Tile.scss';
import { Product } from '../../types';

const service = new Services();

function Tile() {
  const dispatch = useDispatch();
  const data: Product[] = useSelector(dataSelector);

  useEffect(() => {
    if (data == null) {
      service.GetData().then((data: Product) => {
        dispatch({ type: 'INIT_DATA', payload: data });
      });
    }
  }, [data]);

  if (data == null) {
    return <div>загрузка</div>;
  }

  const cards = data?.map((item: Product) => {
    return <TileCard key={item.id} {...item} />;
  });

  return <div className='Tile'>{cards}</div>;
}

export default memo(Tile);
