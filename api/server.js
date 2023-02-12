require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use('/static', express.static('public'))

const apiRoutes = require('./routes/apiRoutes')

app.get('/', async(req, res,next) => {
  res.json({message:'API is running...'})
})
app.use('/api', apiRoutes)

const connectDB = require("./config/db");
connectDB();

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }
  next(error);
});

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  } else {
      res.status(500).json({
         message: error.message, 
      })
  }
});

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`TEST1 app listening on port ${port}`)
})