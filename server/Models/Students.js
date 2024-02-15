const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    grade: { 
        type: String, 
        default: "" 
    },
    unit: { 
        type: Number, 
        default: 0 
    },
    cgpa: { 
        type: Number, 
        default: 0 
    },
    title: { 
        type: String, 
        default: "" 
    },
    point: { 
        type: Number, 
        default: 0 
    },
    GC: { 
        type: Number, 
        default: 0 
    },
})

const studentModel = mongoose.model('Student', studentSchema)

module.exports = studentModel