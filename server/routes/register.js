import express from 'express'
import bcrypt from 'bcrypt';
import fetch from 'node-fetch'

const router =express.Router()
// register add user
router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const hashedPass = await bcrypt.hash(req.body.password, 10)
        const reg = {
            email: req.body.email,
            password: hashedPass
        }
        const response = await fetch('http://localhost:8080/user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reg)
        })
        res.send(response)
    } catch (err) {
        res.send({ err })

    }
});

export default router;