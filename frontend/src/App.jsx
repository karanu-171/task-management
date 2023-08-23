import React from "react";
import {  Routes, Route } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import Home from "./components/home/Home";
import AddTask from "./components/tasks/AddTask";
import UpdateTask from "./components/tasks/UpdateTask";
import ReadTask from "./components/tasks/ReadTask";
import Headers from "./components/headers/Headers";
import './App.css'

function App() {

  return (
    <div className="App">
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddTask/>}/>
        <Route path='/update/:id' element={<UpdateTask/>}/>
        <Route path='/read/:id' element={<ReadTask/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
