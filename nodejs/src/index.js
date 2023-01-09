const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json('app fullcycle is running')
})

app.listen(5000, () => console.log('the app is running'))