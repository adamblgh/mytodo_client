import axios from "axios";
const url="";

export const getTodos = async () => {
    const response = await axios.get(url+'/all');
    return await response;
};