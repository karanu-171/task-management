import React,{ useState,useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";


const Home = () => {
  const [data, setData] = useState([])
  const {id} = useParams()

  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await axios.get("http://localhost:4000/task")
        setData(response.data.message)
        console.log(response.data.message)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTask();
  }, []);

  const _id = id

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?")
    async function deleteTask() {
      try {
        const response = await axios.delete(`http://localhost:4000/task/${id}`)
        console.log(response.data.message)
      } catch (error) {
        console.log(error)
      }
    }
    if(confirm) {
      deleteTask();
    }
  }
  
    return(
        <div className="d-flex flex-column align-items-center bg-light vh-100">
          <h1 className="mt-4 mb-4">List of tasks</h1>
          <div className="w-75 rounded bg-white border shadow p-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((d, i) =>(
                  <tr key = {i}>
                    <td>{d._id}</td>
                    <td>{d.title}</td>
                    <td>{d.description}</td>
                    <td>{d.status}</td>
                    <td>
                      <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                      <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                      <button onClick={e => handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
    );
}

export default Home;