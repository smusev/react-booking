import {
    TICKET_BOOKING_REQUEST,
    TICKET_BOOKING_SUCCESS,
    TICKET_BOOKING_FAIL,
    TICKET_ORDER_REQUEST,
    TICKET_ORDER_SUCCESS,
    TICKET_ORDER_FAIL,
    TICKET_ORDER_CLEAR
} from "../actions/actionTypes"

function bookTicketsReducer(state = { loading: true, success: false, tickets: [] }, action) {

  switch (action.type) {
    case TICKET_ORDER_REQUEST:
      return { loading: false, success: true, tickets: [] }; 
    case TICKET_ORDER_SUCCESS:
      return { loading: false, success: true, tickets: [] };
    case TICKET_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case TICKET_ORDER_CLEAR:
      return { loading: false, success: false, tickets: [] };      
    case TICKET_BOOKING_REQUEST:
      return { loading: true, tickets: [] };
    case TICKET_BOOKING_SUCCESS: 
      return { loading: false, tickets: action.payload };
    case TICKET_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { bookTicketsReducer }