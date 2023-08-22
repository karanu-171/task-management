import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getAllTasks } from '../redux/features/TaskSlice'


const TaskList = () => {

    const { task } = useSelector(state => state.task);
    const dispatch = useDispatch();
    console.log(task)

    useEffect(() => {
        dispatch(getAllTasks());
      }, [dispatch]);
    
    return(
        <div className="TaskList">
       
        </div>
    );
}

export default TaskList;