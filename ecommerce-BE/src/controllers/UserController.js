const UserService = require("../services/UserService")
const createUser = async (req, res)=>{
    try{
        console.log(req.body);
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const { name,email, password, confirmPassword,phone } = req.body;
            const isCheck = regex.test(email);
            if(!name|| !password|| !confirmPassword|| !phone|| !email){
                return res.status(200).json({
                    status: 'ERR',
                    messages: 'The input is required'
                })
            }else if(!isCheck){
                return res.status(200).json({
                    status: 'ERR',
                    messages: 'The input is email'
            })
            }else if(password !== confirmPassword){
                return res.status(200).json({
                    status: 'ERR',
                    messages: 'password is equal to confirmPassword'
            })
        }
        const response = await UserService.createUser(req.body);
        return res.status(200).json(response);
    }catch(e){
        return res.status(404).json({
            message: e
        }
        );}
}
const loginUser = async (req, res)=>{
    try{
        console.log(req.body);
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const { name,email, password, confirmPassword,phone } = req.body;
            const isCheck = regex.test(email);
            if(!name|| !password|| !confirmPassword|| !phone|| !email){
                return res.status(200).json({
                    status: 'ERR',
                    messages: 'The input is required'
                })
            }else if(!isCheck){
                return res.status(200).json({
                    status: 'ERR',
                    messages: 'The input is email'
            })
            }else if(password !== confirmPassword){
                return res.status(200).json({
                    status: 'ERR',
                    messages: 'password is equal to confirmPassword'
            })
        }
        const response = await UserService.loginUser(req.body);
        return res.status(200).json(response);
    }catch(e){
        return res.status(404).json({
            message: e
        }
        );}
}
module.exports = {createUser,loginUser};