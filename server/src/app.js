const express = require('express')
const userRouter = require('./routes/user')
require('./db/mongoose')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('server is running on port ' + port)
})