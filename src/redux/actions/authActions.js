import axios from "axios";
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
} from "../slice/authSlice.js";

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://api-fs-skilvul.vercel.app/api/auth/login",
      userData
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.response.data));
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://api-fs-skilvul.vercel.app/api/auth/regist",
      userData
    ); // Sesuaikan dengan endpoint register
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.response.data));
  }
};
