const express = require('express')
const app = express()
const users = require('./users.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(users))

app.get('/:id', (req, res) => {
    /* GET a user by their id */
})

app.post('/', (req, res) => {
    /* POST user data using the request body */
})

app.get('/', (req, res) => {
    /* GET a user by their name using query params*/
})

const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
