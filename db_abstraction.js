const mongoose = require('mongoose');

var documentSchema = new mongoose.Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model('Document', documentSchema);
