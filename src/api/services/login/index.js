import { BASE_INSTANCE } from 'api/constant';

export const loginServices = (data) => BASE_INSTANCE.post('/login', data);
