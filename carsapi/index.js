const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 4000
app.use(express.static('public'))
app.use(bodyparser.json())
app.use(cors())

let data = [
    {
        id:"1",
        name:"fake",
        lat:"65.012093",
        lon:"25.465076",
        type:"unknown",
        speed:"fast",
        price:"12121",
        isTaken:false
    }
]

app.get("/data", (req, res) => {
    res.json(data)
})


app.listen(port, () => {
    console.log(`example app listenint at port http://localhost:${port}`)
})