import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rideListReducer, rideDetailsReducer } from './reducers/rideReducer';
import { bookTicketsReducer } from './reducers/ticketReducer';

const initialState = {};

const reducer = combineReducers({
    rideList: rideListReducer,
    rideDetails: rideDetailsReducer,
    bookedTickets: bookTicketsReducer
})

const composeEnhancer = compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;