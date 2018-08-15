import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from 'jwt-decode';

import {baseURL, TOKEN_NAME_IN_STORE} from "../../constans/GlobalConstans";

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post(`${baseURL}/api/users/register`, userData)
        .then(() => history.push('/login'))
        .catch(err =>
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          })
        );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
    axios.post(`${baseURL}/api/users/login`, userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem(TOKEN_NAME_IN_STORE, token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        // .catch(err =>
        //     dispatch({
        //         type: GET_ERRORS,
        //         payload: err.response.data
        //     }));
};

// Set logged in user (Устанавливаем вошедшего пользователя)
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem(TOKEN_NAME_IN_STORE);
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};


