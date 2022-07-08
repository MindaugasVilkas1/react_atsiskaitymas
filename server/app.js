import express from 'express'
import routerBlog from './routes/blog.js'
import register from './routes/register.js'
import login from './routes/login.js'
import verify from './routes/verify.js'
import 'dotenv/config'
import cors from 'cors'


//
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/verify', verify)
app.use('/api/login', login)
app.use('/api/user', register)
app.use('/api/blog', routerBlog)
app.listen(PORT, () => console.log(`Server is running on Port on ${PORT}`))