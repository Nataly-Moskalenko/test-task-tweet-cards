import axios from 'axios';

const BASE_URL = 'https://64579cc11a4c152cf98605f9.mockapi.io/phonebook';

export const apiServiceFetch = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const apiServiceUpdate = async (id, followers) => {
  const response = await axios.put(`${BASE_URL}/users/${id}`, followers);
  console.log(response);
  return response.data;
};
