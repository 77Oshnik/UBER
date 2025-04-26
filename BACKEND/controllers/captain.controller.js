const captainServices = require("../services/captain.services");
const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ error: erros.array() });
  }

  

  const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlready = await captainModel.findOne({ email });
  if (isCaptainAlready) {
    return res.status(400).json({ message: "Captain already exist" });
  }

  const hashPassword = await captainModel.hashPassword(password);

  const captain = await captainServices.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = await captain.generateAuthToken();
  res.status(201).json({ token, captain });
};


module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatched = await captain.comparePassword(password);
    if (!isPasswordMatched) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = await captain.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlCklisted = await BlacklistToken.findOne({ token });
    if (isBlCklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    await BlacklistToken.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
}