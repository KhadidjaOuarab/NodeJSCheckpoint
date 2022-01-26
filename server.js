const express = require('express')
const app = express()
const path = require('path')
//install dotenv
require('dotenv').config()
//app.get('/', (req,res) => {res.send('Hello World')})
// app.get('/', (req,res) => {res.sendFile(path.join(__dirname, 'public', 'index.html'))})

// app.get('/Home', (req,res) => {res.send(' HOME Hello World')})

const members = {
    id: 1,
    name : 'khadidja'
}
app.get('/', (req,res) => {res.json(members)})

app.listen(
 process.env.PORT || 3000 , () => console.log(`${process.env.PORT}`)

)