const express = require('express');
const { config } = require('dotenv');
const helmet = require('helmet')
const cors = require('cors')
const rateLimit= require('express-rate-limit')
const routes = require('./routes/index.routes')
config()

const port = process.env.PORT || 5000
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-7',
	legacyHeaders: false, 
})
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))

app.use(limiter)

routes(app)
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})






