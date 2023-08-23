import React,{ useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTask = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        status: ''
    })
    const {id} = useParams()
      
      const navigate = useNavigate();
      const updateChange = (e) => {
        setValues((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value, 
        }))
      }

    useEffect(() => {
      async function updateTask() {
        try {
          const response = await axios.get("http://localhost:4000/task/" + id)
          setValues(response.data.message)
          console.log(response.data.message)
        } catch (error) {
          console.log(error)
        }
      }
      updateTask();
      }, []);

      const updateSubmit = (e) => {
        e.preventDefault();
          async function updateTask() {
            try {
              const response = await axios.put("http://localhost:4000/task/" + id, values)
              console.log(response.data)
              navigate('/')
            } catch (error) {
              console.log(error)
            }
          }
          updateTask();
        }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1>Update Task</h1>
        <form onSubmit={updateSubmit}>
        <div className="mb-3">
             <strong>ID: {values._id}</strong>
        </div>
        <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
                 type="text" 
                 placeholder="Enter title" 
                 className="form-control"
                 name="title"
                 value={values.title}
                 onChange={updateChange}
                />
        </div>
        <div className="mb-2">
            <label htmlFor="description" className="form-label mb-3">Description</label>
            <input 
                type="text" 
                placeholder="Enter description" 
                className="form-control"
                name="description"
                value={values.description}
                onChange = {updateChange}
                />
        </div>
        <div className="d-flex flex-column">
            <label htmlFor="taskStatus" 
                   className="form-label mb-3" 
                   value={values.status} 
                   onChange = {updateChange}>Task Status:</label>
            <select id="taskStatus" name="status" >
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
}

export default UpdateTask;