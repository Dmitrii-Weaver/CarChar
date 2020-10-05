const express = require("express")
const bodyparser = require("body-parser")
const {v4: uuidv4} = require('uuid')
const bcrypt = require('bcrypt')
const cors = require("cors")
const passport = require("passport")
const passportHttp = require("passport-http")
const app = express()
const port = 4000
app.use(express.static('public'))
app.use(bodyparser.json())
app.use(cors())

let data = [
    {
        id:"0",
        name:"fake",
        lat:"66.012093",
        lng:"25.465076",
        type:"unknown",
        speed:"fast",
        price:"12121",
        isTaken:"this charger is not used at the moment"
    },
    {
        id:"1",
        name:"dadadad",
        lat:"65.012000",
        lng:"24.465000",
        type:"unknown",
        speed:"fast",
        price:"12121",
        isTaken:"this charger is not used at the moment"
    } ,  {
        id:"2",
        name:"aaa",
        lat:"70.012000",
        lng:"20.465000",
        type:"unknown",
        speed:"fast",
        price:"12121",
        isTaken:"this charger is not used at the moment"
    }
]
let users = [
    {
        id:"1",
        username:"a",
        password:"$2b$08$qChPmuOhuFKJb4tEvrHwKuPBLNVC2.mshjJ2sio6DrfVQ6PLq8KGW"
    }
]

app.get("/data", (req, res) => {

    res.json(data)
})

app.get("/users", (req, res) => {

    res.json(users)
})

app.post ("/register", (req, res) => {
    const passwordHash = bcrypt.hashSync(req.body.password, 8)
    users.push({
        id: uuidv4(),
        username: req.body.username,
        password: passwordHash
    })
    res.sendStatus(200)
})




passport.use(new passportHttp.BasicStrategy(function (username, password, done){
 const userResult = users.find(user => user.username === username)
 if (userResult == undefined){
     return done(null, false)
 }
 if(bcrypt.compareSync(password, userResult.password)==false) {
    return done(null, false)

 }

 done(null, userResult)
}))
app.post("/login", passport.authenticate('basic', {session: false}), (req,res) =>{
    console.log('success')
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`example app listenint at port http://localhost:${port}`)
})