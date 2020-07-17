import {
    TICKET_BOOKING_REQUEST,
    TICKET_BOOKING_SUCCESS,
    TICKET_BOOKING_FAIL 
} from "./actionTypes"

const bookTickets = (props) => async (dispatch) => {
    try {
      dispatch({ type: TICKET_BOOKING_REQUEST });
      dispatch({ type: TICKET_BOOKING_SUCCESS, payload: props });
    } catch (error) {
      dispatch({ type: TICKET_BOOKING_FAIL, payload: error.message });
    }
  }
  
  export { bookTickets };