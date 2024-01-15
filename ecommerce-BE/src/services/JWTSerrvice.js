const jwt = require('jsonwebtoken');
const genneralAccessToken = (payload)=>{
    console.log('payload',payload)
    const accessToken = jwt.sign({
        payload
    },'access_token',{expiresIn:'1h'})
    return accessToken
}
const genneralRefreshAccessToken = (payload)=>{
    const accessToken = jwt.sign({
        payload
    },'access_token',{expiresIn:'365d'})
    return accessToken
}
module.exports={
    genneralAccessToken,
    genneralRefreshAccessToken
}