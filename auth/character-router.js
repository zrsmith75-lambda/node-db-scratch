// const express = require('express')
// const router = express.Router()

const router = require('express').Router()
const Characters = require('./character-model.js')

router.get('/', (req, res) => {
  res.status(200).json({ message: `it's working from character-router`})
  // Characters.find()
})


module.exports = router 