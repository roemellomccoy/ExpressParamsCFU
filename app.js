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

app.get('/:name', (req, res) => {
    let user = users.filter(user => {
        if(user.name[0] === req.params.name){
            res.send(user)
        }
    })
})

app.get('/:id', (req, res) => {
    /* GET a user by their id */
    let index = parseInt(req.params.id) - 1
    console.log(index)
    res.send(users[index])
})

app.post('/', (req, res) => {
    /* POST user data using the request body */
    let newUser = {
        "id": req.body.id,
        "name": req.body.name,
        "profilePic": req.body.profilePic,
        "lastCalled": req.body.lastCalled,
        "timesCalled": req.body.timesCalled,
        "notes": null
    }
    users.push(newUser)
})



const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
