const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name must be at least 3 characters"],
        },
        lastname:{
            type:String,
            minlength:[3,"Last name must be at least 3 characters"],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,"Email must be at least 5 characters"],
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:[6,"Password must be at least 6 characters"],
    },
    socketId:{
        type:String,
    }
})

userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
}

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}

const userModel=mongoose.model('user',userSchema)
module.exports=userModel