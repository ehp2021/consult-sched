const mongoose = require('../db');

const doctorSchema = mongoose.Schema({
    'name': { type: String, required: true },
    'last_name': { type: String, required: true },
    'drug_1':  { type: Date, required: false },
    'drug_2': { type: String, required: false },
    'drug_3': { type: String, required: false },
    'drug_4': { type: String, required: false },
    'drug_list': {type: String, required: true}
})

const Event = mongoose.model('doctor', doctorSchema);

module.exports = Event;