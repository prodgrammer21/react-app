const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/public'), 'index.html')
})

app.listen(3001, () => {
    console.log("Listening on port: 3001")
})