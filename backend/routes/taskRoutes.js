const express = require('express')
const {
    createTask,
    getOneTask,
    getAllTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController")

const taskRoutes = express.Router()

taskRoutes.post("/create", createTask);
taskRoutes.get("/:id", getOneTask);
taskRoutes.get("/", getAllTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);


module.exports = taskRoutes;