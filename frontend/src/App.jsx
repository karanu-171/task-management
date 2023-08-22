import React from "react";
import {  Routes, Route } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import TaskList from "./components/home/TaskList";
import AddTask from "./components/tasks/AddTask";
import Headers from "./components/headers/Headers";
import './App.css'

function App() {

  return (
    <div className="App">
      <Headers/>
      <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/add' element={<AddTask/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
