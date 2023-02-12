const express = require('express');
const app = express();

const todoRoutes = require('./todoRoutes');

app.use("/todos", todoRoutes)

module.exports = app;