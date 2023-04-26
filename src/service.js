import axios from 'axios';

axios.defaults.baseURL = 'https://todolist-server-hrl4.onrender.com';

const apiUrl = axios.create();

apiUrl.interceptors.response.use(
  (response) => response,
  (error) => {
   console.log(error)
    // reject with error if response status is not 403
    return Promise.reject(error);
  }
);



export default {
  getTasks: async () => {
    const result = await apiUrl.get()
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name)
    const result = await apiUrl.post(``, { Name: name, Iscomplete: false })
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    const result = await apiUrl.put(`${id}`, { id, isComplete })
      
    return result.data;
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    await apiUrl.delete(`${id}`)
  }
};
