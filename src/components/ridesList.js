import React from 'react';
import RideSummary from './rideSummary';

function RidesList({rides, details}) {
  return (
    <div className="rides-list" id="rides-list">
      { rides && rides.map(ride => {
        return(
          <RideSummary ride={ride} key={ride._id} onClick={() => details(ride._id)}/>
        )
      })}
    </div> 
  );
}

export default RidesList;