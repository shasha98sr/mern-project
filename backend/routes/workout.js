const express = require('express')

const router =express.Router()

router.get('/', (req, res)=>{
    res.json({mssg:'get all workouts '})
})

module.exports = router