const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    contact: {
        phone: String,
        email: String
    },

    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PATIENT'
    }]

}, { timestamps: true })

const DOCTOR = mongoose.model('DOCTOR', doctorSchema);
module.exports = DOCTOR;