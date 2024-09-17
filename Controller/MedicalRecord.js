const MedicalRecord = require('../Models/medicalRecord');


exports.MedicalRecordCreate = async function (req, res, next) {
    try {

        let MedicalRecordCreate = await MedicalRecord.create(req.body);

        res.status(200).json({
            status: 'Success',
            message: 'MedicalRecord created successfully!',
            data: MedicalRecordCreate,
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};


// Find All MedicalRecord
exports.FindData = async function (req, res, next) {
    try {
        let MedicalRecordFind = await MedicalRecord.find();

        res.status(200).json({
            status: 'Success',
            message: 'MedicalRecord found successfully!',
            data: MedicalRecordFind
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Find MedicalRecord by ID
exports.FindId = async function (req, res, next) {
    try {
        let MedicalRecordFind = await MedicalRecord.findById(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'MedicalRecord found successfully!',
            data: MedicalRecordFind
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Delete MedicalRecord by ID
exports.MedicalRecordDelete = async function (req, res, next) {
    try {
        await MedicalRecord.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'MedicalRecord deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Update MedicalRecord by ID
exports.MedicalRecordUpdate = async function (req, res, next) {
    try {
        let updatedMedicalRecord = await MedicalRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            status: 'Success',
            message: 'MedicalRecord updated successfully!',
            data: updatedMedicalRecord
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};
