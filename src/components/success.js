import React from 'react';
import { clearOrder } from '../actions/ticketActions';
import { useDispatch } from 'react-redux';

function RidesList({rides, details}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('click-zrozumilo')
    dispatch(clearOrder());
  }

  return (
    <div className="success" id="success">
      <p>Дякуємо за заказ</p>
      <p>Информацію про Ваш заказ буде відправлено на вказаний телефон</p>
      <button className="button" onClick={handleClick}>Зрозуміло</button>
    </div> 
  );
}

export default RidesList;