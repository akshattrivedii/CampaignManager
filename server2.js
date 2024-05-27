const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  team: String // Add team field to the schema
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({
            resp:"success",
            role:user.team,
          });
          console.log(user);
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  // Extract user details and team from request body
  const { name, email, password, team } = req.body;
  
  // Create a new employee instance with user details and team
  const newEmployee = new EmployeeModel({
    name,
    email,
    password,
    team
  });
  
  // Save the new employee to the database
  newEmployee.save()
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});

/*
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee");

const EmployeeSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)

app.post("/login" , (req , res)=> {
    const{ email,password } = req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user) {
        if(user.password === password){
            res.json("success")
        }else {
            res.json("The password is incorrect")
        }
    } else {
            res.json("No record exixted")
        }
    })
})

app.post('/register', (req , res) =>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running on port 3001")
})
*/