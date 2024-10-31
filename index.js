const express = require('express')
const yahooFinance = require('yahoo-finance2').default
const morgan = require('morgan')
const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(morgan('dev'))


app.get('/api/mercado', async (req, res) =>{
    try {
        const quote = await yahooFinance.quote('EURUSD=X')
        res.json(quote)
    } catch (error) {
        res.status(500).send("Error al obtener los datos del mercado");
    }
})

app.listen(PORT, ()=>{
    console.log('Escuchando por puerto ' + PORT);
    
})