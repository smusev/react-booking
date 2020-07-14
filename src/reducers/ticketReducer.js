import {
    TICKET_BOOKING_REQUEST,
    TICKET_BOOKING_SUCCESS,
    TICKET_BOOKING_FAIL 
} from "../actions/actionTypes"

function bookTicketsReducer(state = { loading: true, tickets: [] }, action) {

    switch (action.type) {
        case TICKET_BOOKING_REQUEST:
            return { loading: true, tickets: [] };
        case TICKET_BOOKING_SUCCESS: 
            return { loading: false, tickets: action.payload };
        case TICKET_BOOKING_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
        }
    }


export { bookTicketsReducer }