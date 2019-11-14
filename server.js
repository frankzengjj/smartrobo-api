const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

const clarification = require('./controllers/clarification');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'smart-brain'
    }
  });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.handProfile(req, res, db) })

app.post('/clarify', (req, res) => { clarification.handleAPI(req, res) })

app.listen(3001, () => {
    console.log("app is running on port 3001");
})