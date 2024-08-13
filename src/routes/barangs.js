import express from 'express'
const barangsRouter = express.Router()

barangsRouter.route('/')
.get((req, res) => {
    res.send(`ini page adalah method get barang`)
})
.post((req, res) => {
    res.send(`ini page adalah method post barang`)
})
.put((req, res) => {
    res.send(`ini page adalah method put barang`)
})
.delete((req, res) => {
    res.send(`ini page adalah method delete barang`)
})

barangsRouter.route('/:id')
.get((req, res) => {
    res.send(`ini page barang dengan method get dan id ${req.params.id}`)
})
.post((req, res) => {
    res.send(`ini page barang dengan metond post dan id ${req.params.id}`)
})
.put((req, res) => {
    res.send(`ini page barang dengan metond put dan id ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`ini page barang dengan metond delete dan id ${req.params.id}`)
})

export default barangsRouter