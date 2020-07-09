import React, { Fragment, useState } from 'react';
import Select from 'react-select'
import { cities } from './data/';
import DayPicker  from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/uk';
//import 'fuse.js'
import { useHistory } from "react-router-dom";
import 'react-day-picker/lib/style.css';

import Ride from './ride.js'
import RideDetails from './rideDetails.js'
import RidesList from './ridesList.js'
import Checkout from './checkout.js'

import { useDispatch, useSelector } from 'react-redux';
import { listRides, rideDetails } from '../actions/rideActions';

function Main() {
    const [rideRequest, setRideRequest] = useState(
    {
    departCity: null,
    arrivalCity: null,
    selectedDay: null,
  	}
  );
  const dispatch = useDispatch();
  const [ message, setMessage] = useState('');
  const [route, hashChange] = useState(window.location.hash.substr(1));

const options = [
  {name: 'Swedish', value: 'sv'},
  {name: 'English', value: 'en'},
  {
    type: 'group',
    name: 'Group name',
    items: [
      {name: 'Spanish', value: 'es'},
    ]
  },
];

const ridesList = useSelector(state => state.rideList);
const {rides} = ridesList;

const today = new Date();

const handleDepartCity  = (city) => {
	city 
	?	setRideRequest({...rideRequest,
			departCity: city.value
		})
	: setRideRequest({...rideRequest,
			departCity: null
		})
}

const handleArrivalCity  = (city) => {
	city 
	?	setRideRequest({...rideRequest,
			arrivalCity: city.value
		})
	: setRideRequest({...rideRequest,
			arrivalCity: null
		})
}

const handleDayClick = (day, { selected }) =>  {
		let date = day.toLocaleDateString();
    setRideRequest({...rideRequest, 
      selectedDay: selected ? undefined : day,
    });
    console.log(date);
  }

let history = useHistory();

const handleRideSearch = () => {
    (!rideRequest.departCity ) ? setMessage('Введіть місто відправленя') :
    (!rideRequest.arrivalCity ) ? setMessage('Введіть місто прибуття') :
    (!rideRequest.selectedDay ) ? setMessage('Введіть дату відправленя') : 
    dispatch(listRides({depart:rideRequest.departCity,arrival:rideRequest.arrivalCity,date:rideRequest.selectedDay.toISOString()}))
    .then(document.getElementById("rides-list").scrollIntoView())
    .then(setMessage(''));

//    const element = document.getElementById("rides-list")
    
/*
	if (rideRequest.departCity && rideRequest.arrivalCity && rideRequest.selectedDay) {
    history.push("/?depart="+rideRequest.departCity+"&arrival="+rideRequest.arrivalCity+"&date="+rideRequest.selectedDay.toLocaleDateString());
    dispatch(listRides({depart:rideRequest.departCity,arrival:rideRequest.arrivalCity,date:rideRequest.selectedDay.toISOString()}));  
  }
  */
}

const handleRideDetails = (id) => {
  const rideChoosen = rides.find(ride => ride._id === id);
  dispatch(rideDetails(rideChoosen))
}

  return (
  	<Fragment>
    <div className="Main">

      <div className="select-wrapper">
	   	  <Select 
	   	  	className='select-search' 
          placeholder="Звідки"
	   	  	options={cities} 
      	  onChange={handleDepartCity}
          isClearable
	   	  />
  	 	  <Select  
  	 	  	className='select-search' 
          placeholder="Куди"
  	 	  	options={cities} 
  	 	  	onChange={handleArrivalCity}
  	 	  	isClearable
  	 	  />
  	 	</div>


				<DayPicker 
					className="" 
					disabledDays={{ before: today }}
          selectedDays={rideRequest.selectedDay}
          onDayClick={handleDayClick}

					localeUtils={MomentLocaleUtils} 
					locale="uk" 
					numberOfMonths={2}
				/>
        <p className='error-message'>{message}</p>
        <button 
        	className="button"
        	onClick={handleRideSearch}
        >
        Ты кнопка блять
        { route }
        </button>

      <RidesList rides={rides} details={handleRideDetails} />

      <Ride/>
      <RideDetails/>
      <Checkout/>
    </div>
    </Fragment>
  );
}

export default Main;
