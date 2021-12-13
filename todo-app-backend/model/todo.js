const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: { type: Types.ObjectId, ref: "Model" },
    todo: String,
    completed: Boolean
})

module.exports = model('Todo', schema)
