const {Schema, model} = require('mongoose')

const schema = new Schema({
    id: String,
    todo: [String],
    completed: [String]
})

module.exports = model('Model', schema)
