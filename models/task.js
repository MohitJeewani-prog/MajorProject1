const mongoose = require('mongoose');

//dauly task schema
const todoSchema = new mongoose.Schema({

    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    }
});

const dailTask = mongoose.model('dailTask', todoSchema);

//export this schema module
module.exports = dailTask;