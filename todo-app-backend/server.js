const app = require('express')()
const mongoose = require('mongoose')
const uuid = require('uuid')
const Model = require('./model/model')
const cors = require('cors')

const PORT = process.env.PORT || 5000

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
}))

app.get('/:id', async (req, res) => {
    if (req.params.id !== 'null') {
        const data = await Model.findOne({id: req.params.id})
        res.json(data)
    } else {
        const data = new Model({id: uuid.v1(), todo: [], completed: []})
        await data.save().catch(e => console.log(e))
        res.json(data)
    }
})

app.post('/:id', async (req, res) => {
    const data = await Model.findOne({id: req.params.id})

    if (req.headers.todo) {
        data.todo.push(req.headers.todo)
    }
    if (req.headers.completed) {
        data.todo.splice(data.todo.indexOf(req.headers.completed), 1)
        data.completed.push(req.headers.completed)
    }
    data.save().catch(e => console.log(e))
    res.json({message: 'good'})
})

app.delete('/:id', async (req, res) => {
    const data = await Model.findOne({id: req.params.id})

    if (req.headers.todo) {
        data.todo.splice(data.todo.indexOf(req.headers.todo), 1)
    }
    if (req.headers.completed) {
        data.completed.splice(data.completed.indexOf(req.headers.completed), 1)
    }
    await data.save().catch(e => console.log(e))
    res.json({message: 'good'})
})

app.put('/:id', async (req, res) => {
    const data = await Model.findOne({id: req.params.id})

    if (req.headers.todo) {
        data.todo.splice(data.todo.indexOf(req.headers.prevTodo), 1, req.headers.todo)
    }

    await data.save().catch(e => console.log(e))
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
