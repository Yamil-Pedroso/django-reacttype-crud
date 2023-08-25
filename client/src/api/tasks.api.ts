import axios from 'axios';

const tasksApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/tasks/',
});

export const getTasks = () => tasksApi.get('/');

export const getTask = (id: string) => tasksApi.get(`${id}/`);

export const createTask = (newTask: { title: string; description: string }) => tasksApi.post('/', newTask);

export const updateTask = (id: string, updatedTask: { title: string; description: string }) => tasksApi.put(`${id}/`, updatedTask);

export const deleteTask = (id: string) => tasksApi.delete(`${id}/`);
