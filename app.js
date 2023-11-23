const express=require('express');
const bodyParser = require('body-parser');
const cors=require('cors');

const app = express();
const adminRoute=require('./route/admin');
const sequelize=require('./util/database');


app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.json())
app.use('/user',adminRoute);

app.use((req,res,next)=>{
    console.log('404');
    res.status(404);
})

sequelize.sync().then(()=>{
    console.log('server port started ');
    app.listen(4000);
}).catch(err=>{console.log(err)});