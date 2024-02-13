const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const studentModel = require('./Models/Students');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)

app.post('/login', [
    check('email', 'Email is required').notEmpty().isEmail(),
    check('password', 'Password is required').notEmpty().isLength({ min: 5 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    studentModel.findOne({email: email})
    .then(student => {
       if(student){
              if(student.password === password){
                res.json('Success')
              } else {
                res.status(400).json('Incorrect password')
              }
       }
       else {
              res.status(400).json('User not found')
       }
    })
});

app.post('/signup', [
    // username must be an email
    check('email').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 })
  ], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    studentModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))
});
app.listen(3001, () => {
    console.log('server is running')
});
