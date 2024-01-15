    const  express = require('express')
    const app = express();
    const mongoose = require('mongoose');
    const dotenv = require('dotenv');
    const routes = require('./routes');
    var bodyParser = require('body-parser')
    dotenv.config();
    const port = process.env.PORT || 3001;
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

    routes(app);
    
    mongoose.connect(`${process.env.MONGO_DB}`)
    .then(()=>{
    console.log('Connect Db success');
    })
    .catch(err => console.log(err))

    app.listen(port,()=>{
        console.log('Server is running in port: ', port)
    });