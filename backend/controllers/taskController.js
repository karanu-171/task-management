const Task = require("../models/taskModel");

// Create a new task instance
const createTask = async (req,res) =>{

  const {title, description, status, } = req.body

  try {
    const task = new Task({
      title,
      description,
      status
    })
    const result = await task.save()

    return  res.status(201).json({task: result })
  } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error);
  }
}

const getOneTask = async (req, res) => {
  
  const id = req.params.id
  try {
    const task  = await Task.findById(id)
    res.status(200).json({message: task})
} catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error)
}
}

const getAllTask = async (req, res) => {

  try {
    const task = await Task.find({})
    res.status(200).json({message: task})
} catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
}
}

const updateTask = async (req, res) => {
  const id  = req.params.id

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body);

    if (!updatedTask) {
      return res.status(404).json({ message: `Cannot find task with ID: ${id}` });
    }

    res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error);
  }
}

const deleteTask = async (req, res) => {

  const id = req.params.id 
    try {
      const task = await Task.findById(id);
      if (!task) {
        return res.status(404).json("Task not found..");
      }

      const deleteATask = await Task.findByIdAndDelete(id);
      res.status(200).json({
        message: "Task deleted successfully"
      });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

module.exports = {
  createTask,
  getOneTask,
  getAllTask,
  updateTask,
  deleteTask
}
