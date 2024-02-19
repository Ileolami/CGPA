/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentModel = require("./Models/Students");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticateUser = require("./middleware/authmiddleware");

const process = require("process");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect(process.env.MONGODB_URI).then((res) => {
//   console.log("db connected");
// });

// index.js
app.get('/students/:id', async(req, res) => {
  const id = req.params.id;

  const student = await studentModel.findById({_id: id});

  
  if (!student) {
    return res
      .status(400)
      .json({ success: false, message: "Student not found" });
  }

  res.json({student});
})
app.post("/calculate", authenticateUser, async (req, res) => {
  try {
    const {submittedValues, scale } = req.body;
    console.log(req.body)
    const {id} = req.user
    // console.log(email);

    // Find the student by email
    // const student = await studentModel.findOne({ email });
    const student = await studentModel.findById({_id:id});

    console.log(student);

    console.log("we are here")

    if (!student) {
      return res
        .status(400)
        .json({ success: false, message: "Student not found" });
    }

    console.log("we past here")

    let totalCreditHours = 0;
    let totalGradePoints = 0;

    // Calculate CGPA based on the grading scale
    if (scale === "4.0") {
      const gradeMapping4 = {
        A: 4,
        B: 3,
        C: 2,
        D: 1,
        E: 0,
        F: 0,
      };

      submittedValues.forEach((value) => {
        const gradePoint = gradeMapping4[value.grade];
        totalCreditHours += parseFloat(value.credit);
        totalGradePoints += gradePoint * parseFloat(value.credit);
      });
    } else if (scale === "5.0") {
      submittedValues.forEach((value) => {
        totalCreditHours += parseFloat(value.credit);
        totalGradePoints += parseFloat(value.gradeCreditProduct) ;
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid grading scale" });
    }

    // Calculate CGPA
    const calculatedCgpa = totalGradePoints / totalCreditHours;


      await studentModel.findByIdAndUpdate({_id:id}, {cgpa:calculatedCgpa, courses:submittedValues}) 

    res.status(201).json({
      success: true,
      message: "CGPA calculated successfully",
      cgpa: calculatedCgpa,
    });

  } catch (error) {
    console.error("Error calculating CGPA:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post(
  "/login",
  [
    check("email", "Email is required").notEmpty().isEmail(),
    check("password", "Password is required").notEmpty().isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Compare passwords
    const { email, password } = req.body;
    const user = await studentModel.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const payload = {
      user: {
        id: user._id,
      },
    };
    // console.log(payload);

    const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
      expiresIn: "1hr",
    });

    
   
    console.log({ token });
    res.json({ token});
  }
);

app.post(
  "/signup",
  [
    // username must be an email
    check("email").isEmail(),
    // password must be at least 5 chars long
    check("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { password, ...data } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    studentModel
      .create({ ...data, password: hashedPassword })
      .then((student) => res.json(student))
      .catch((err) => res.json(err));
  }
);

app.listen(3001, async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("server is running");
  }catch(error){
    console.log(error);
  }
  
});
