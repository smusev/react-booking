import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import QR from '../media/Privat24_QR.jpg'; 

function Checkout() {
  const {tickets} = useSelector(state => state.bookedTickets);
  const {ride} = useSelector(state => state.rideDetails);
  const [ payMethod, setMethod] = useState("Card");

console.log(ride);

  const ticketList = tickets.map((item, index) => {
    return( 
      <div className="ticket-wrapper" key={index}> 
        <div className="ticket-name">Вагон: {item.wagon} Місце: {item.seatNumber} Ціна: {item.price}</div>
      </div>)
  })

  const payment = () => {
    switch (payMethod) {
      case 'Privat24':
        return <div>
          <img src={QR} alt="qr-code"/>
        </div>;
      case 'GooglePay':
        return <div className="select-input">
          <input className="input-form left" placeholder='gmail account' type="email"/> 
        </div>;
      case 'Card':
        return <div>
        <div className="input-form-wrapper">
          <div className="input-wrapper">
          <label>Номер картки</label>
          <InputMask className="input-form" mask="9999 9999 9999 9999" maskChar=" "  placeholder='xxxx xxxx xxxx xxxx' type="card"/>
          </div>
          <div className="input-wrapper-double">
          <div className="input-wrapper ">
            <label>Строк дії</label>
            <InputMask className="input-form half-size" mask="99 / 99" maskChar=" "  placeholder='MM / YY' type="card"/>
          </div>
          <div className="input-wrapper">
          <label>CVV2</label>
          <InputMask className="input-form half-size" mask="999" maskChar=""  placeholder='***' type="card"/>
          </div>
          </div>
          <div className="input-wrapper">
          <label>Ім'я та прізвище</label>
          <input className="input-form" placeholder='CARDHOLDER NAME' type="name"/> 
          </div>
        </div>    
      </div>;
      default:
        return null;
    }
  }

  const onChangeValue = (event) => {
      setMethod(event.target.value);
  }
  
  return (
    <div className="checkout">
      <div className="tickets-summary">
        <span>{ride.date.substring(0, 10)} {ride.departTime}</span>
        <span>{ride.depart}-{ride.arrival}</span>
        <span>Загальна вартість: {tickets.reduce((value, slot)=> value+slot.price, 0)} грн.</span>
        <br/>
        <span>Ваші квітки:</span>
      </div>
      <div className="">{ticketList}</div>
      <div onChange={onChangeValue} className="payment-method-wrapper">
        <div>
          <label>Оберіть метод сплати:</label>
        </div>
        <div >
            <input id="Privat24" type="radio" value="Privat24" name="gender" /> 
            <label htmlFor="Privat24">Приват24</label>
        </div>
        <div>
          <input id="GooglePay" type="radio" value="GooglePay" name="gender" />
          <label htmlFor="GooglePay">Google Pay</label>
        </div>
        <div>
          <input id="Card" type="radio" value="Card" name="gender" checked={ payMethod === "Card" } readOnly /> 
          <label htmlFor="Card">Visa, Mastercard</label>
        </div>
      </div>
      {payment()}
      <button className="button">Підтвердити</button>
    </div>
  );
}

export default Checkout;