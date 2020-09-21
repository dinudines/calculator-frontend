import axios from 'axios';
const API_URI = "/api/calculations";

export const GET_ALL = () => {
  return axios
    .get(API_URI)
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
    .delete(API_URI)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return false;
    });
};