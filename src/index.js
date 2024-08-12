import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('hello world')
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

app.get('/barang/:id', (req, res) => {
    const idBarang = req.params.id
    const kategoriBarang = req.query.kategori
    console.log(idBarang)
    res.send(`ini page barang dengan id ${idBarang} <br/> dengan kategori ${kategoriBarang}`)
})

app.use('*', (req,res) => {
    res.status(404)
    res.send('404 not found')
})

app.listen(port, () => {
    console.log(`listening to port:${port}`)
})