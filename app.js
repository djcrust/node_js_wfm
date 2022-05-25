require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require("./api/users/user.router");
const employeeRouter = require("./api/employee/employee.router");

app.use("/api/users", userRouter);
app.use("/api/employees", employeeRouter);

app.listen(process.env.PORT, () => {
    console.log('App running on port ', process.env.PORT)
})