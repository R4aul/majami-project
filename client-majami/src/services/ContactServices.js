import { api } from '../api'

export const SendContactRequest = async (data) => {
   let res = await api.post('/sendEmail', data);
   return res;
}