const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
 
  title: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
