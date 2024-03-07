const url = 'http://localhost:3000/notes';
import axios from 'axios'

export const create = async (text) => {
    const data = JSON.stringify({text: text});
    const createNote = await axios.post(url, data, {headers: { "Content-Type": "application/json"}});
    return createNote.data;
}

export const noteDelete = async (id) => {
    await axios.delete(`${url}/${id}`,  {headers: { "Content-Type": "application/json"}});
}

export const noteList = async () => {
    const dataBD = await axios.get(url, {headers: { "Content-Type": "application/json"}});
    return dataBD.data
}