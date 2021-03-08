const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const QuestionsRouter = require('./Routes/QuestionsRoute');
const AnswersRoute = require('./Routes/AnswersRoute');
const app = express();


//middlewares
app.use(bodyParser.json());
app.use('/',QuestionsRouter);
app.use('/answers',AnswersRoute);

/*app.get('/',(req,res) =>{
    res.send("Hello welcome home");
});*/

mongoose.connect(process.env.database_connection,{useNewUrlParser:true}, () =>{
    console.log('database connected')
});
app.listen(process.env.Port || 3000);