const express = require('express')
const app = express()

let fibonacci = function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

let rnd = () => Math.floor(Math.random() * 15) + 1  

app.get('/', (req, res) => res.send('Hola Mundo!!!'))
app.get('/fib', (req, res) => res.send({'fibonacci': fibonacci(rnd()) }))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
