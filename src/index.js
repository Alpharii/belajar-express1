import express from 'express'
const app = express()
const port = 3000
import router from './routes/index.js'

app.get('/', (req, res) => {
    res.json({
        nama: 'bintang',
        umur: 17
    })
})

app.get('/about', (req,res) => {
    res.send('ini page about')
})

app.get('/contact', (req,res) => {
    res.send('ini page contact')
})


app.use(router)

app.listen(port, () => {
    console.log(`listening to port:${port}`)
})