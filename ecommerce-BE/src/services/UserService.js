const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const { genneralAccessToken, genneralRefreshAccessToken } = require('./JWTSerrvice');
const createUser= (newUser)=>{
    return new Promise(async(resolve,reject)=>{
        const { name,email, password, confirmPassword,phone } = newUser;

        try{
        const checkUser = await User.findOne({
            email: email
        })
        if( checkUser!= null){
            resolve({
               status: 'OK',
               message: 'the email is already'
            })
        }
        const hash = bcrypt.hashSync(password,10)
        console.log(hash);
        const createUser = await User.create({
            name,
            email, 
            password: hash, 
            confirmPassword: hash,
            phone 

        })
        if(createUser){
            resolve({
                status: "OK",
                message: 'SUCCESS',
                data: createUser
            })
        }
           
        }catch(e){
            reject(e);
        }
        
    })
}
const loginUser= (userLogin)=>{
    return new Promise(async(resolve,reject)=>{
        const { name,email, password, confirmPassword,phone } = userLogin;

        try{
        const checkUser = await User.findOne({
            email: email
        })
        if( checkUser === null){
            resolve({
               status: 'OK',
               message: 'the user is not defined',
            })
        }
       
        const comparePassword = bcrypt.compareSync(password,checkUser.password)
       
        if(!comparePassword){
            resolve({
                status: "OK",
                message: 'The password or user is incorrect',

             })
        }
        const access_token = await genneralAccessToken({
            id: checkUser.id,
            isAdmin: checkUser.isAdmin
        })
        const refresh_token = await genneralRefreshAccessToken({
            id: checkUser.id,
            isAdmin: checkUser.isAdmin
        })
        console.log('accessToken',access_token);
        resolve({
            status: "OK",
           message: 'SUCCESS',
           access_token,
           refresh_token

         })
        }catch(e){
            reject(e);
        }
        
    })
}
module.exports = {createUser,loginUser};