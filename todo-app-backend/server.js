const app = require('express')()
const mongoose = require('mongoose')
const uuid = require('uuid')
const Model = require('./model/model')
const Todo = require('./model/todo')
const cors = require('cors')

const PORT = process.env.PORT || 5000

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
}))

app.get('/:id', async (req, res) => {
    if (req.params.id !== 'null') {
        const data = await Todo.find({id: req.params.id}, ['todo', 'completed']).catch(e => console.log(e))
        res.json(data)
    } else {
        const data = new Model()
        data.save().catch(e => console.log(e))
        res.json(data)
    }
})

app.post('/:id', async (req, res) => {
    const data = new Todo({
        todo: req.headers.todo,
        completed: false,
        id: new mongoose.Types.ObjectId(req.params.id)
    })
    data.save().catch(e => console.log(e))
    res.json({message: 'good'})
})

app.delete('/:id', async (req, res) => {
    const data = await Todo.deleteOne({id: req.params.id, todo: req.headers.todo})
    res.json({message: 'good'})
})

app.put('/:id', async (req, res) => {
    const data = await Todo.findOneAndUpdate({id: req.params.id, todo: req.headers.prevtodo}, {todo: req.headers.todo})
    res.json({message: 'good'})
})

app.patch('/:id', async (req, res) => {
    const data = await Todo.findOneAndUpdate({id: req.params.id, todo: req.headers.todo}, {completed: +req.headers.completed})
    res.json({message: 'good'})
})

async function start(uri, callback) {
    try {
        await mongoose.connect("mongodb+srv://egor:L0Vkf130vx7rb7bi@cluster0.vlxx1.mongodb.net/todo-api", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, () => {
    console.log('server start on PORT ' + PORT)
})
