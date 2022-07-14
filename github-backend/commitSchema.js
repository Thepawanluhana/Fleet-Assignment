const mongoose = require('mongoose');

const commitSchema = new mongoose.Schema({
    oid: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
    author: {
        type: Object
    },
    committer: {
        type: Object
    },
    parents: {
        type: Array
    }
})

module.exports = mongoose.model('commits', commitSchema)