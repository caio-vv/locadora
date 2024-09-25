import User from "../models/user-model.js";
import generateAccessToken from "../services/jwt-service.js";

export const signup = async (req, res) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            nickname: req.body.nickname
        })
        const token = generateAccessToken(user)
        
        res.status(201).json(token)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        }).exec

        if(user || (await user.isValidPassword(req.body.password))){
            const token = generateAccessToken(user)
            res.json(token)
        } else {
        res.status(404).json({
            error: "email or password incorrect"
        })      
    }
    } catch (error) {
        console.log(error)
        res.status(404).json()
    }
}
