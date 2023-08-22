import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import taskService from './taskService';

const task  = JSON.parse(localStorage.getItem("task"))

const initialState = {
  task: null
}

export const createTask = createAsyncThunk("createTask", async (task, thunkAPI) => {
  try {
    return await taskService.createTask(task)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

export const getOneTask = createAsyncThunk("getOneTask", async (taskId, thunkAPI) => {
  try {
    return await taskService.getOneTask(taskId)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

export const getAllTasks = createAsyncThunk("getAllTasks", async (thunkAPI) => {
  try {
    return await taskService.getAllTask()
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

export const updateTask = createAsyncThunk("updateTask", async ({taskId, updateTask}, thunkAPI) => {
  try {
    return await taskService.updateTask(taskId, updateTask)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

export const deleteTask = createAsyncThunk("deleteTask", async (taskId, thunkAPI) => {
  try {
    return await taskService.deleteTask(taskId)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});


    

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createdTask: (state, action) => {
      const newTask = action.payload
      state= [...state, newTask]
    },
    getOnTask: (state, action) => {
      if (action.payload) {
        state = action.payload;
      } else {
        state = null; 
      }
    },
    getAlTask: (state, action) => {
        state = action.payload;
    },
    
    updatedTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deletedTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    }
  },
 
});

export const { createdTask, getAlTask, getOnTask, updatedTask, deletedTask } = taskSlice.actions
export default taskSlice.reducer