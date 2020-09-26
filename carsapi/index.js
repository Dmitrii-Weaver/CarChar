const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 4000
app.use(express.static('public'))
app.use(bodyparser.json())
app.use(cors())