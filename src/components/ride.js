import React, {useState, useEffect} from 'react';
import carScheme from '../carScheme.png'; 
import ImageMapper from '../util/ImageMapper';
import { useDispatch } from 'react-redux';
import { bookTickets } from '../actions/ticketActions';

function Ride({ride, wagons}) {
  const dispatch = useDispatch();
  const [ state, setState ] = useState(0);
  const [ myRide, setMyRide ] = useState(ride);
  const [ slotOrders, setSlotOrders] = useState([]);
  const [ currentWagon, setCurrentWagon ] = useState(ride.carts[0]);
  const [ cartMap, setCartMap ] = useState({ name: "my-map", areas: []});
  const NOT_AVAILABLE = "rgba(255, 0, 0, 0.5)";

  useEffect(() => {
    const wagon = currentWagon && wagons.find(wagon => wagon.name === currentWagon.carType );
    let areas = [];
    myRide.slots.forEach(seat => {
      if (seat.cartNumber === currentWagon.number){
        const slot = wagon.slots.find(slot => slot.name === seat.seatNumber );
        areas.push({ 
          disabled: seat.available ? false : true, 
          name: seat.seatNumber,
          shape: "rect", 
          coords: slot.coords, 
          preFillColor: seat.available ? "" : NOT_AVAILABLE, 
          fillColor: "rgba(0, 0, 255, 0.3)", 
          available: seat.available, 
          price: seat.price
        })
      }
    });
    setCartMap({...cartMap, areas});
    return () => {};
  }, [currentWagon, myRide]);

/*  useEffect(() => {
    return () => {};
  }, [cartMap]);
*/

  const handleBooking = () => {
    dispatch(bookTickets(slotOrders));
  }

  const orderList = slotOrders.map((slot, index) => {
    return <div className="slot-wrapper" key={index}>
      <div className="">
        <p>Вагон&nbsp;{slot.wagon} Місце&nbsp;{slot.seatNumber}</p>
      </div>
      <div className="">
        <button onClick={() => removeFromOrderList(slot.wagon, slot.seatNumber)} className="button-remove">X</button>
      </div>
    </div>
  })

  const removeFromOrderList = (wagon, seatNumber) => {
    setSlotOrders(slotOrders.filter(slot => (slot.seatNumber !== seatNumber) || ( slot.wagon !== wagon )));
    changeAvailability(wagon, seatNumber);
  }

  const changeAvailability = (wagon, seat) => {
    let slots = myRide.slots;
    let i = slots.findIndex(slot => (slot.seatNumber === seat) && ( slot.cartNumber === wagon ))
    slots[i] = ({...slots[i], available: !slots[i].available})
    setMyRide ({...myRide, slots: slots});
  } 

  const handleSlot = (area) => {
    if (!area.disabled) {
    let newSlotOrders = slotOrders.filter(slot => (slot.seatNumber !== area.name) || ( slot.wagon !== currentWagon.number ));
    setSlotOrders([...newSlotOrders, {wagon:currentWagon.number, seatNumber:area.name, price:area.price}]);
    changeAvailability(currentWagon.number, area.name);
    }
  }

  const handleCart = (cart) => {
    setCurrentWagon(cart);
  }

  const wagonTabs = myRide.carts.map((cart, index) => {
    return <div className={`cart-tabs ${currentWagon.number === cart.number ? `cart-selected` : null }`} key={index} onClick={() => handleCart(cart)}>
      <p> Вагон {cart.number}</p>
      <p> {cart.carType} </p>
    </div>
  })

  const load = () => {
    setState({ ...state, msg: "Interact with image !" });
  };
  
	const clicked = (area) => {
    handleSlot(area);
		setState({
      ...state,
			msg: `Місце номер ${area.name} коштує ${area.price} ${area.available? "доступне" : "недоступне"}`
    });
  };
  
 /*
  const moveOnArea = (area, evt) => {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		setState({
      ...state,
			moveMsg: `You moved on ${area.shape} ${
				area.name
			} at coords ${JSON.stringify(coords)} !`
		});
	};

  const enterArea = (area) => {
      setState({ ...state, hoveredArea: area });
  }

  const leaveArea = (area) => {
      setState({...state, hoveredArea: null });
  }

  const getTipPosition = (area) => {
      return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  const clickedOutside = (evt) => {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		setState({
      ...state,
			msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
		});
  };
  
	const moveOnImage = (evt) => {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		setState({
      ...state,
			moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
		});
	};
*/

  return (
    <div className="Main">
      <div className="tabs-wrapper"> 
        {wagonTabs} 
      </div>
      <div className="scheme-wrapper">
      <div className="scheme-container">
      {cartMap && <ImageMapper src={carScheme} map={cartMap}
        onLoad={() => load()}
        onClick={area => clicked(area)}
        //onMouseEnter={area => enterArea(area)}
        //onMouseLeave={area => leaveArea(area)}
        //onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
        //onImageClick={evt => clickedOutside(evt)}
        //onImageMouseMove={evt => moveOnImage(evt)}
      />}
      </div>
      <div className="order-list-container">
        {orderList}
        <div className="total-cost">
          <span>Загальна вартість: {slotOrders.reduce((value, slot)=> value+slot.price, 0)} грн.</span>
        </div>
        <div className="handle-button">
          <button className="button" onClick={handleBooking}>Забронювати</button>
        </div>
      </div>

      </div>
      </div>
  );
}

export default Ride;
