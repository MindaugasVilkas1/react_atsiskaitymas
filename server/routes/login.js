import express from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import axios from 'axios'

const router = express.Router()

router.post('/', async(req, res)=>{
const {email, password} = req.body
if(!email || !password){
    return res.status(400).json({
        err: "Email or password is required"
    })
}

const users = await axios.get('http://localhost:8080/user');
const user = users.data.find(user => user.email === email)
const privateKey = process.env.SECRET_JWT_TOKEN
if (!user) {
    return res.status(400).json({
        err: "email daes not exist"
    })
}
const passCompare = await bcrypt.compare(password, user.password)
if(!passCompare){
    return res.status(400).json({
        err: "Password is incorrect"
    })
}
const token = jwt.sign({id:user.id, email:user.email}, privateKey)
res.json({token})
})

export default router