import axios from "axios";
import { API_BASE_URL } from "../../config/api"
import {
    GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const token = localStorage.getItem("jwt")
// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    console.log('register jwt',user)
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    const user = response.data;
    if (user.jwt){
      localStorage.setItem("jwt", user.jwt);
    } 
    console.log("login ",user)
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

//  get user from token
export const getUser = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data;
      console.log("requested User from database ",user)
      dispatch({ type: GET_USER_SUCCESS, payload: user });
    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};

export const logout = (token) => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
    };
  };
