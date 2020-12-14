const express = require('express')
const app = express()
const users = require('./users.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

   
app.get('/', (req, res) => {
    /* Refactor to GET a user by their name using query params *IF* it's passed.
    If no name is passed in query params, should still behave as it currently does */
    res.send(users)
})

app.get('/:id', (req, res) => {
    /* GET a user by their id */
})

app.post('/', (req, res) => {
    /* POST user data using the request body */
})



const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
