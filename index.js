const express = require('express')
const app = express()
const port = 3000
app.set('views', './templates/views')
app.set('view engine', 'ejs')
app.listen(port, () => {
    console.log(`Express application started at port: ${3000}`)
})

app.use((req, res, next) => {
    console.log(`Request type: ${req.method} made at route ${req.originalUrl} at time: ${new Date()}`)
    next()
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/pineapple', (req, res) => {
    res.send('best fruit ever')
})

app.get('/wick', (req, res) => {
    res.send('great last name')
})