const express = require('express');
const mongoose = require('mongoose');
const commitSchema = require('../github-backend/commitSchema');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/fleet-git')
const database = mongoose.connection;
database.once('connected', () => {
    console.log('Database Connected');
})
//repositories/:owner/:repository/commit/:oid
app.get('/', async (req, res) => {
    let data = await commitSchema.find({});
    console.log('data', data);
    res.send(data)
});

app.listen(5000, () => {console.log('Connected to server!')});