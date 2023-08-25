import axios from 'axios';

const authApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/users/',
});

export const getUsers = () => authApi.get('/');

export const getUserById = (id: number) => authApi.get(`${id}/`);

export const registerUser = (newUser: { username: string; email: string; password: string }) => authApi.post('/', newUser);

export const loginUser = (user: { username: string; email: string; password: string }) => authApi.post('/login/', user);

export const logoutUser = () => authApi.post('/logout/');

export const getUser = () => authApi.get('/me/');

export const updateUser = (updatedUser: { username: string; email: string }) => authApi.put('/me/', updatedUser);

export const deleteUser = () => authApi.delete('/me/');