const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: true
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },

    contact: {
        phone: String,
        email: String
    },

    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },

    medicalHistory: [{
        condition: String,
        diagnosisDate: Date,
        treatment: String
    }]
    
}, { timestamps: true });


const PATIENT = mongoose.model('PATIENT', patientSchema);
module.exports = PATIENT;
