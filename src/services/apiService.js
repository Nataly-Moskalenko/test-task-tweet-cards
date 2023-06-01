import axios from 'axios';

const BASE_URL = 'https://64579cc11a4c152cf98605f9.mockapi.io/phonebook';

export default async function apiService() {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
}
