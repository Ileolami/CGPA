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
    courses:{
        type: Array,
        default: []
    },
    cgpa: { 
        type: Number, 
        default: 0 
    },
})


const studentModel = mongoose.model('Student', studentSchema)

module.exports = studentModel