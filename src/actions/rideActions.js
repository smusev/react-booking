import {
    RIDE_LIST_REQUEST, 
    RIDE_LIST_SUCCESS, 
    RIDE_LIST_FAIL,
    RIDE_DETAILS_REQUEST,
    RIDE_DETAILS_SUCCESS,
    RIDE_DETAILS_FAIL,
  } from "./actionTypes";
import axios from 'axios';
let apiUrl = process.env.REACT_APP_API_URL

const listRides = (props) => async (dispatch) => {
  try {
    dispatch({ type: RIDE_LIST_REQUEST });
    const { data } = await axios.post(apiUrl + "/api/rides", props);
    dispatch({ type: RIDE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: RIDE_LIST_FAIL, payload: error.message });
  }
}

const rideDetails = (props) => async (dispatch) => {
  try {
    dispatch({ type: RIDE_DETAILS_REQUEST });
    console.log(props);
    dispatch({ type: RIDE_DETAILS_SUCCESS, payload: {} });
  } catch (error) {
    dispatch({ type: RIDE_DETAILS_FAIL, payload: error.message });
  }
}

export { listRides, rideDetails };