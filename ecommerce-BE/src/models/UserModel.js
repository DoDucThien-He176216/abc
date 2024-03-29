const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String , required: true},
    phone:{type:String, required: true},
    access_token: {type:String, require: true},
    refresher_token: {type:String, require:true},
},{
    timestamps: true
});
const User = mongoose.model("User", userSchema);
module.exports = User;