const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const QuestionsRouter = require('./Routes/QuestionsRoute');
const AnswersRoute = require('./Routes/AnswersRoute');
const app = express();
var cors = require('cors');

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/',QuestionsRouter);
app.use('/answers',AnswersRoute);


mongoose.connect(process.env.database_connection,{useNewUrlParser:true}, () =>{
    console.log('database connected')
});
app.listen(process.env.Port || 3000);