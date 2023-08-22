import axios from 'axios'

const API_URL = "http://localhost:4000/task";

// register task 
const createTask = async (taskData) => {
    const response = await axios.post(`${API_URL}/create`, taskData);
    console.log(response.data)

    if (response.data) {
      localStorage.setItem("task", JSON.stringify(response.data));
    }
    return response.data;
}

// fetch one task
const getOneTask = async (taskId) => {
  const response = await axios.get(`${API_URL}/{taskId}`);
  console.log(response.data)

  if (response.data) {
    localStorage.setItem("task", JSON.stringify(response.data));
  }
  return response.data;
}

//fetch all tasks
const getAllTask = async () => {
  const response = await axios.get(`${API_URL}`);

  if (response.data) {
    localStorage.setItem("task", JSON.stringify(response.data));
  }
  return response.data;
}

// update a single task
const updateTask = async (taskId, taskData) => {
  const response = await axios.put(`${API_URL}/{taskId}`, taskData);
  console.log(response.data)

  if (response.data) {
    localStorage.setItem("task", JSON.stringify(response.data));
  }
  return response.data;
}

// delete a single task
const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/{taskId}`);
  console.log(response.data)

  if (response.data) {
    localStorage.setItem("task", JSON.stringify(response.data));
  }
  return response.data;
}



const taskService = {
    createTask,
    getAllTask,
    getOneTask,
    updateTask,
    deleteTask
}

export default taskService