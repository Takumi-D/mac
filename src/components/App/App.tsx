import React from 'react';

import Tile from '../Tile';
import Modal from '../Modal';
import Basket from '../Basket';

import { useSelector } from 'react-redux';
import { statusModalSelector } from '../../redux/selectors/selectors';

import './App.scss';

function App() {
  const statusModal: boolean = useSelector(statusModalSelector);

  return (
    <div className='App'>
      <Tile />
      <Basket />
      {statusModal ? <Modal /> : null}
    </div>
  );
}

export default App;
