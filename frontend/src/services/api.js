import axios from "axios";

const URL = "";

export const authSignUp = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error: while calling SIGNUP api", error.message);
  }
};

export const authLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error: while calling LOGIN api", error.message);
    return error.response;
  }
};

export const payUsingPaytm = async (data)  => {
  try {
   let response = await axios.post(`${URL}/payment`, data);
   return response.data;
  } catch (error) {
    console.log("Error: while calling PAYMENT api", error.message);
  }
}; 
