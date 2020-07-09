import { 
    RIDE_LIST_REQUEST, 
    RIDE_LIST_SUCCESS, 
    RIDE_LIST_FAIL,
    RIDE_DETAILS_REQUEST,
    RIDE_DETAILS_SUCCESS,
    RIDE_DETAILS_FAIL,
} from "../actions/actionTypes";

function rideListReducer(state = { loading: true, rides: [] }, action) {

switch (action.type) {
    case RIDE_LIST_REQUEST:
        return { loading: true, rides: [] };
    case RIDE_LIST_SUCCESS: 
        return { loading: false, rides: action.payload.rides };
    case RIDE_LIST_FAIL:
        return { loading: false, error: action.payload }
    default:
        return state;
    }
}

function rideDetailsReducer(state = { loading: true, ride: [] }, action) {

    switch (action.type) {
        case RIDE_DETAILS_REQUEST:
            return { loading: true, ride: [] };
        case RIDE_DETAILS_SUCCESS: 
            return { loading: false, ride: action.payload };
        case RIDE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
        }
    }


export { rideListReducer, rideDetailsReducer }