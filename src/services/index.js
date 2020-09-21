import axios from 'axios';
const API_URI = "https://my-own-calculator.herokuapp.com/api/calculations";

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const GET_ALL = () => {
  return axios
    .get(API_URI, {
      headers
    })
    .then(response => {
      return response.data;
   })
   .catch(e => {
     return false;
   });
};

export const CREATE_ONE = (id, input, output) => {
  return axios
    .post(API_URI, {
        id,
        input,
        output
    }, {
      headers
    })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return false;
    });
};

export const DELETE_ALL = () => {
  return axios
    .delete(API_URI, {
      headers
    })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return false;
    });
};