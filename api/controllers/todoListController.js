'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

function list_all_tasks(req, res){
    Task.find({},( err, task ) => {
        if(err)
            res.send(err);
        res.json(task);
    });
}

function create_a_task(req, res){
    var new_task = new Task(req.body);
    new_task.save((err, task)=>{
        if(err)
            res.send(err)
        res.json(task);
    });
}

function read_a_task(req, res){
    Task.findById(req.params.taskId, (err, task) => {
        if(err)
            res.send(err);
        res.json(task);
    })
}

function update_a_task(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

function delete_a_task(req, res){
    Task.remove({
        _id: req. params.taskId
    },
    function(err, task){
        if(err)
            res.send(err);
        res.json({message: "Task successfully deleted" });
    }
    );
}

exports.list_all_tasks = list_all_tasks;
exports.create_a_task = create_a_task;
exports.read_a_task = read_a_task;
exports.update_a_task = update_a_task;
exports.delete_a_task = delete_a_task;