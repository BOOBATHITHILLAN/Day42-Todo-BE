const mongoose=require('mongoose');

//Schema for Todo contents
const todoSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})

const TodoModel=mongoose.model('ToDo',todoSchema)

module.exports=TodoModel;