import React,{ useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ReadTask = () => {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        async function readTask() {
          try {
            const response = await axios.get("http://localhost:4000/task/" + id)
            setData(response.data.message)
            console.log(response.data.message)
          } catch (error) {
            console.log(error)
          }
        }
        readTask();
        }, []);
    return(
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <div className="w-50 border bg-light shadow px-5 pt-3 pb-5 rounded">
                <h3>Details of Task</h3>
                <div className="mb-3">
                    <strong>ID: {data._id}</strong>
                </div>
                <div className="mb-3">
                    <strong>Title: {data.title}</strong>
                </div>
                <div className="mb-3">
                    <strong>Desciption: {data.description}</strong>
                </div>
                <div className="mb-3">
                    <strong>Status: {data.status}</strong>
                </div>
                <Link to={`/update/${id}`} className="btn btn-success">Update</Link>
                <Link to="/" className="btn btn-primary ms-3">Home page</Link>
            </div>
        </div>
    );
}

export default ReadTask;