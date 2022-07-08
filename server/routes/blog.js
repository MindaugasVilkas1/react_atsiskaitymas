import express from 'express'
import fetch from 'node-fetch'
const router = express.Router()
//get blog
router.get("/", async (req, res) => {
    const data = await fetch(`http://localhost:8080/blog`)
        .then(data => data.json())
    res.json(data)
});
//add blog
router.post("/", async (req, res) => {
    try {
        console.log(req.body)
       
        const response = await fetch('http://localhost:8080/blog', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        })
        res.send(response)
    } catch (err) {
        res.send({ err })
        console.log(err)
    }
});
export default router