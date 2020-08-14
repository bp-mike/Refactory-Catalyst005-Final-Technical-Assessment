const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config();

const Covid = require('./models/covid');
// __________ init express(app)
const app = express()
// ___________ view pug files
app.set('view engine', 'pug');
app.set('views', './views');

// ________ mongo
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
},()=>{ console.log("mongo is connected")});
mongoose.connection.on('open',()=>{
    console.log('mongoose connection open');
}).on('error', (err)=>{
    console.log(`connection error: ${err.message}`);
})

// ________ middleware
app.use(bodyParser.urlencoded({extended:true}));

// __________ stati files
// app.use(express.static(path.join(__dirname, "")));
app.use('/static',express.static('public'));

// ______ routes
app.get('/', (req, res)=>{
    res.render('index')
})
app.post('/', async (req, res)=>{

    const add_person = new Covid(req.body);
    try{
        await add_person.save()
        console.log(add_person);
        res.redirect('back')
    }catch(err){
        res.send("some thing went wrong.");
        console.log(err)
    }
})

app.get('*', (req, res)=>{
    res.send("invalid page")
})


app.listen(5000)