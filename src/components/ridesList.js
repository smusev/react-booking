import React from 'react';
import RideSummary from './rideSummary';

function RidesList({rides, details}) {
  console.log(rides)
  return (
    <div className="rides-list" id="rides-list">
    	<h3>RideList</h3>
      { rides && rides.map(ride => {
        return(
          <RideSummary ride={ride} key={ride._id} onClick={() => details(ride._id)}/>
        )
      })}
    </div> 
  );
}

export default RidesList;