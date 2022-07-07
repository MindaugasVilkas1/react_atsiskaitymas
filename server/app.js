import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

//
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//get blog
app.get("/api/blog", async (req, res) => {
    const data = await fetch(`http://localhost:8080/blog`)
        .then(data => data.json())
    res.json(data)
});
//add blog
app.post("/api/blog", async (req, res) => {
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




app.listen(5000, () => console.log("Server is running on Port 5000"))