import express from 'express'
const router = express.Router()
import barangsRouter from './barangs.js'

router.use('/barangs', barangsRouter)

router.use('*', (req, res) => {
    res.status(404)
    res.send('404 not found')
})


export default router