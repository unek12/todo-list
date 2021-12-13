const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    todo: [{ type: Types.ObjectId, ref: "Todo" }],
})

module.exports = model('Model', schema)
