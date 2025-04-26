const express=require('express');
const {body}=require('express-validator')
const userController=require('../controllers/user.controller')
const usermiddle=require('../middleware/auth.middleware')

const router=express.Router()

router.post('/register',[
    body('fullname.firstname').notEmpty().withMessage("First anme is required"),
    body('fullname.lastname').notEmpty().withMessage("Last name is required"),
    body('email').isEmail().withMessage("Email is required"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
],userController.registerUser)

router.get('/login',[
    body('email').isEmail().withMessage("Email is required"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
],userController.loginUser)

router.get('/profile',usermiddle.authUser,userController.getUserProfile)

router.get('/logout',usermiddle.authUser,userController.logoutUser)


module.exports=router