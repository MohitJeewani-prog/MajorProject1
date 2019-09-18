//set express, path and port
const express = require('express');
const path = require('path');
const port = 8000;

//get mongoose for db
const db = require('./config/mongoose');

//get schema of dailyTask from model
const dailyTask = require('./models/task');

const app = express();

//setting template engine i.e the view part
app.set('view engine', 'ejs');

//setting path for views folder
app.set('views', path.join(__dirname, 'views'));

//middleware to connect controller and view
app.use(express.urlencoded());

//access assets i.e static files
app.use(express.static('assets'));

//route for homepage
app.get('/', function(req, res){

    //load tasks from dailyTask database
    dailyTask.find({}, function(err, tasks){

        if(err){
            console.log('Error in fetching  contacts from db', err);
            return;
        }

        //passing title and lists to view html i.e home.ejs
        return res.render('home', {
            title: "TODO App",
            todo_list: tasks
        });
    });
});

//creating todo task
app.post('/create-TODO', function(req, res){

    dailyTask.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err, newTodo){
        if(err){
            console.log('error in creating a contact');
            return;
        }

        console.log('**********', newTodo);

        return res.redirect('back');
    });
});

app.post('/delete-todo', function(req, res){

    console.log(req.body);
    console.log(Object.keys(req.body));

    //iterate over all the checkboxes selected
    Object.keys(req.body).forEach(function(key){

        console.log(key);
        dailyTask.findByIdAndDelete(key, function(err, data){

            if(err){
                console.log('error in deleting');
                return;
            }
        });

        res.redirect('back');
    });

});

//listen on port 8000
app.listen(port, function(err){

    if(err){console.log("error", error)};

    console.log("My express server is running on port", port);
});