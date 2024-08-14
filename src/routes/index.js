import express from 'express'
const router = express.Router()
import barangsRouter from './barangs.js'

router.use('/', (req ,res) => {
    const data = {
        title: 'ini adalah title',
        layout: 'layout/main-layout',
        data:[
            {
                id: 1,
                nama: 'baju'
            },
            {
                id: 2,
                nama: 'celana'
            },
            {
                id: 3,
                nama: 'sepatu'
            }
        ]
    }
    res.render('index', data)
})

router.use('/barangs', barangsRouter)

router.use('*', (req, res) => {
    res.status(404)
    res.send('404 not found')
})

export default router