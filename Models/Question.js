const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required: true
    },
    answers:{
        type:Array,
        required:false
    },
    likes:{
        type:Number,
        required:false
    }

});

module.exports = mongoose.model('Question',QuestionSchema);