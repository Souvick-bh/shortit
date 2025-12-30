require('dotenv').config();
const jwt = require("jsonwebtoken");
const secret = process.env.AUTH_SECRET;

function setUser(user) {
    return jwt.sign({
        _id: user._id, email: user.email
    },secret, {expiresIn: 60 * 60 * 24});
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token,secret);   
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser, getUser
}