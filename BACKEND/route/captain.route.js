const express=require('express');
const {body}=require('express-validator')
const router=express.Router()
const authMiddleware=require('../middleware/auth.middleware')
const captainController=require('../controllers/captain.controller')

router.post('/register', [
    body('fullname.firstname').notEmpty().withMessage("First name is required"),
    body('email').isEmail().withMessage("Email is required"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
    body('vehicle.color').notEmpty().withMessage("Color is required"),
    body('vehicle.plate').notEmpty().withMessage("Plate is required"),
    body('vehicle.capacity').notEmpty().withMessage("Capacity is required"),
    body('vehicle.vehicleType').notEmpty().withMessage("Vehicle type is required"),
],captainController.registerCaptain)

router.post('/login', [
    body('email').isEmail().withMessage("Email is required"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
],captainController.loginCaptain)

router.get('/profile',authMiddleware.authCaptain ,captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain ,captainController.logoutCaptain)

module.exports=router