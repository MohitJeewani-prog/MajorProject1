//import library
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/to_do_list_db');

//check if its successful
const db = mongoose.connection;

//on error
db.on('error', console.error.bind(console, 'error in connecting to db'));

//on success 
db.once('open', function(){
    console.log('Successfully connected to databse');
});