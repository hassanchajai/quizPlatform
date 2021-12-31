const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();
const apiRouter = require('./app/routes/api/index')
const logger = require("morgan");
const path=require('path')
// const morgan = require("morgan");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use("/storage", express.static("./storage"))
// parse requests of content-type - application/json
app.use(express.json());
app.use(logger("dev"));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// api's routes
app.use("/api", apiRouter);

// set port, listen for requests
const PORT = process.env.PORT || 3001;

db.sequelize.sync({force:true})
// db.sequelize.authenticate().then(res => {

// }).catch(err => {
//   console.error('Unable to connect to the database:', err);
// });
app.listen(PORT, () => {
  console.log('Connection has been established successfully to MYSQL.');
  console.log(`Server is running on port ${PORT}.`);
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});