const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    
    visitDate: {
        type: Date,
        default: Date.now
    },

    diagnosis: String,

    treatment: String,

    prescriptions: [String]   //represent the name of a medication or a treatment method

}, { timestamps: true });

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
module.exports = MedicalRecord;
