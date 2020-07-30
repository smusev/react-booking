import axios from 'axios';
import {
    TICKET_BOOKING_REQUEST,
    TICKET_BOOKING_SUCCESS,
    TICKET_BOOKING_FAIL,
    TICKET_ORDER_REQUEST,
    TICKET_ORDER_SUCCESS,
    TICKET_ORDER_FAIL,
    TICKET_ORDER_CLEAR
} from "./actionTypes";

let apiUrl = process.env.REACT_APP_API_URL;

const bookTickets = (props) => async (dispatch) => {
  try {
    dispatch({ type: TICKET_BOOKING_REQUEST });
    dispatch({ type: TICKET_BOOKING_SUCCESS, payload: props });
  } catch (error) {
    dispatch({ type: TICKET_BOOKING_FAIL, payload: error.message });
  }
}

const placeOrder = (props) => async (dispatch) => {
  try {
    dispatch({ type: TICKET_ORDER_REQUEST });
    await axios.post(apiUrl + "/api/orders", props);
    dispatch({ type: TICKET_ORDER_SUCCESS });
  } catch (error) {
    console.log(error.message)
    dispatch({ type: TICKET_ORDER_FAIL, payload: error.message });
  }
}
  
const clearOrder = () => async (dispatch) => {
  dispatch({ type: TICKET_ORDER_CLEAR });
}

export { bookTickets, placeOrder, clearOrder };