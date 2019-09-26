const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 8080;

app.use('/', express.static('public'));
app.use(bodyParser.json())

let clientId = 0;
let clientsRoutes = require('./routes/clients')

const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

app.post('/clients', (req,res) => {
  clientId ++ 
  res.send(clientId.toString());
})

//not sure how to get the route to post for messages dynamically with clientId. Hard coded for now
app.post('/messages', (req,res) => {
  messages.push(req.body)
  res.json(messages)
})

app.get('/messages', (req,res) => {
  res.json(messages)
})

app.listen(port, () => {
  console.log(`web server listening on port ${port}!`)
});