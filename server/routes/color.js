'use strict'

const express = require('express')
const router = express.Router()

router.get('/colors', (req, res, next) => {
	let randomIndex = Math.floor(Math.random() * 9) // random number between 0 - 8
	let randomFirstRGB = Math.floor(Math.random() * 255)
	let randomSecondRGB = Math.floor(Math.random() * 255)
	let randomThirdRGB = Math.floor(Math.random() * 255)
	res.json({
		i: randomIndex,
		rgb1: randomFirstRGB,
		rgb2: randomSecondRGB,
		rgb3: randomThirdRGB
	})
})

module.exports = router
