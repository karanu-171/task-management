const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const taskRoutes = require('./routes/taskRoutes')

// connect to db
connectDb();

const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();

app.use('/task', taskRoutes)
const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});