const express = require('express')
const app = express()

app.use(express.json())

app.post('/api/v1/random', (req, res) => { 
    
    const nomes = req.body
    const posicao = Math.floor(Math.random() * nomes.length)

    res.json(nomes[posicao]) 

})

app.listen(9090)