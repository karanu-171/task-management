import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const AddTask = () => {
    const [values, setValues] = useState({
      title: '',
      description: '',
      status: ''
    })
    const navigate = useNavigate();

    const taskChange = (e) => {
      setValues((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value, 
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
        async function postTask() {
          try {
            const response = await axios.post("http://localhost:4000/task/create", values)
            console.log(response.data)
            navigate('/')
          } catch (error) {
            console.log(error)
          }
        }
        postTask();
    }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1>Create Task</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
                 type="text" 
                 placeholder="Enter title" 
                 className="form-control"
                 name="title"
                 value={values.title}
                 onChange = {taskChange}/>
        </div>
        <div className="mb-2">
            <label htmlFor="description" className="form-label mb-3">Description</label>
            <input 
                type="text" 
                placeholder="Enter description" 
                className="form-control"
                name="description"
                value={values.description}
                onChange = {taskChange}/>
        </div>
        <div className="d-flex flex-column">
            <label htmlFor="taskStatus" className="form-label mb-3">Task Status:</label>
            <select id="taskStatus" name="status" value={values.status} onChange = {taskChange}>
                <option value="">select status</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
                <option value="inProgress">In-Progress</option>
             </select>
        </div>
        <button type="submit" className="btn btn-success mt-4">Submit</button>
        <Link to="/" className="btn btn-primary ms-3 mt-4">Home page</Link>
        </form>
      </div>
    </div>
  );
};

export default AddTask;