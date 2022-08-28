import axios from "axios";
const URL = "https://630b00c9ed18e825164c7d03.mockapi.io/";

async function getUsers(): Promise<any> {
  const response = await axios.get(`${URL}users`);
  return response.data;
}
async function updateUserName(id: string, name: string): Promise<any> {
  const response = await axios.put(`${URL}users/${id}`, { name });
  return response.data;
}

export const api = {
  getUsers,
  updateUserName,
};
