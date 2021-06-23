const express = require('express')
const app = express()
const users = require('./users.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/students', (req, res) => {
    /* Refactor to GET a user by their name using query params *IF* it's passed.
    If no name is passed in query params, should still behave as it currently does */
    res.send(users)
})

// app.get('/students?search=:name', (req, res) => {
//     console.log(req.params.search)
//     users.forEach(user => {
//             console.log(user.username)
//         if(user.username === req.params.search){
//             res.send(user)
//         }
//     })
// })

app.get('/students/:studentId', (req, res) => {
    users.filter(user => {
        if(user.studentId === req.params.studentId){
            res.send(user)
        }
    })
})



const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
