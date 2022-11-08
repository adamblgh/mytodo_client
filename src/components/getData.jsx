import axios from "axios";
const url="https://todo-server-f2kj.onrender.com";

export const getTodos = async () => {
    const response = await axios.get(url+'/all');
    return await response;
};

export const delItem = async (id) => {
    const response = await axios.delete(url+'/delete/'+id);
    return await response;
};

export const delItems = async () => {
    const response = await axios.delete(url+'/deleteall/');
    return await response;
};

export const addItem = async (formdata) => {
    const response = await axios.post(url+'/add',formdata);
    return await response;
};

export const Update = async (id) => {
    const response = await axios.put(url+'/update/'+id);
    return await response;
};