import { 
    RIDE_LIST_REQUEST, 
    RIDE_LIST_SUCCESS, 
    RIDE_LIST_FAIL,
    RIDE_DETAILS_REQUEST,
    RIDE_DETAILS_SUCCESS,
    RIDE_DETAILS_FAIL,
    TICKET_ORDER_SUCCESS,
} from "../actions/actionTypes";

function rideListReducer(state = { loading: true, rides: [] }, action) {

switch (action.type) {
    case RIDE_LIST_REQUEST:
        return { loading: true, rides: [] };
    case TICKET_ORDER_SUCCESS:
        return { loading: true, rides: [] };
    case RIDE_LIST_SUCCESS: 
        return { loading: false, rides: action.payload.rides };
    case RIDE_LIST_FAIL:
        return { loading: false, error: action.payload }
    default:
        return state;
    }
}

function rideDetailsReducer(state = { loading: true, ride: {}, wagons: [] }, action) {

    switch (action.type) {
        case RIDE_LIST_REQUEST:
            return { loading: true, ride: {}, wagons: [] };
        case RIDE_DETAILS_REQUEST:
            return { loading: true, ride: {}, wagons: [] };
        case TICKET_ORDER_SUCCESS:
            return { loading: true, ride: {}, wagons: [] };
        case RIDE_DETAILS_SUCCESS: 
            return { loading: false, ride: action.payload.ride, wagons: action.payload.wagons };
        case RIDE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
        }
    }


export { rideListReducer, rideDetailsReducer }