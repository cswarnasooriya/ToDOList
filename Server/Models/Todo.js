const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema({ //create type shema
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const TodoModel = mongoose.model("todo", TodoSchema);
module.exports = TodoModel;