import React from 'react';

function rideSummary(props) {

const { ride } = props;
const availableSlots = ride.slots.reduce((count, slot) => slot.available ? ++count : count, 0);
const minPrice = ride.slots.reduce((price, slot) =>  price < slot.price ? price : slot.price );

  return (
    <div className="ride-summary" onClick={props.onClick}>
      <div className="ride-info">
		<div className="connection-time">
			<p className="departure-time"> {ride.departTime} </p>
			<p className="departure-time"> {ride.arrivalTime} </p>        
		</div>
		<div className="connection-stations">
			<p className="station-name-label"> {ride.depart}</p>
  			<p className="station-name-label"> {ride.arrival} </p>        
		</div>
		<div>
			<p> {ride.travelTime} </p>
		</div>	
        <div>
  			<p> от {minPrice} грн.</p>
			<p>{availableSlots} мест доступно</p>
		</div>
      </div>
    </div>
  );
}

export default rideSummary;
