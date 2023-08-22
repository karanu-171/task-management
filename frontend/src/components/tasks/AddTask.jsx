import React, {useState, useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask } from '../redux/features/TaskSlice'
import './AddTask.css';


const AddTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { task } = useSelector(state => state.task);


    const handleSubmit = (e) => {
      e.preventDefault()
      const data = {title, description, status}
      dispatch(createTask(data))
      navigate("/")
    }

  return (
    <div className="AddTask">
      <h1>Create Task</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title" className="form-label mb-3">Title</label>
            <input
                 type="text" 
                 placeholder="Enter title" 
                 className="form-control"
                 value={title}
                 onChange = {(e)=> setTitle(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="description" className="form-label mb-3">Description</label>
            <input 
                type="text" 
                placeholder="Enter description" 
                className="form-control"
                value={description}
                onChange = {(e)=> setDescription(e.target.value)}/>
        </div>
        <div className="selector">
            <label htmlFor="taskStatus" className="form-label mb-3">Task Status:</label>
            <select id="taskStatus" value={status} onChange={e=> setStatus(e.target.value)}>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
                <option value="inProgress">In-Progress</option>
             </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;