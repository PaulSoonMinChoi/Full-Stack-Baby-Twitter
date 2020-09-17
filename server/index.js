const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('express').Router();
const app = express();
const port = 8080;
const Sequelize = require('sequelize');
const db = new Sequelize('twitterDB', 'root', '', {
  dialect: 'mysql'
});

db.authenticate()
  .then(() => console.log('Database Connected...'))
  .catch(err => console.error(err))

//creating our tables basically
const User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

//sync those muddah pookers up
db.sync()
  // .then(() => console.log('table created!!!'))


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ROUTERS
app.get('/', (req, res) => {
  User.findAll({
    attributes: ['username']
  })
  .then((results) => {
    res.status(200).json(results);
  })
  .catch(err => {
    res.status(400).send(err);
  })
})

app.post('/', (req, res) => {
  User.create({username: req.body.username, password: req.body.password})
  .then(() => {
    res.status(200).send('SUCCESSFUL CREATE');
  })
  .catch(err => {
    res.status(400).send(err);
  })
})

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`SUCCESSFUL CONNECTION LISTENING AT PORT: ${port}`));