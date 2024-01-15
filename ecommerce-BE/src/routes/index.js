const UserRouter = require('./UserRoute')
const routes = (app)=>{
    app.use('/user',UserRouter);
}

module.exports = routes;