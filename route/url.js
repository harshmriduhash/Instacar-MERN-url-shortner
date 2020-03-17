const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const shortId = require('shortid')
const Url = require('../model/url')

// @route POST api/v1/url/shorten
// desc Create short URL
router.post('/shorten', async (req, res) => {
    const {
        longUrl
    } = req.body
    const baseUrl = process.env.baseUrl


    // Check base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json({
            msg: 'Invalid base Url'
        })
    }

    // Create url code
    const urlCode = shortId.generate()

    // Check long url
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({
                longUrl
            })

            if (url) {
                res.json(url)
            } else {
                const shortUrl = `${baseUrl}/${urlCode}`

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })

                await url.save()

                res.json(url)
            }
        } catch (err) {
            res.status(500).json({
                msg: 'Server error'
            })

        }
    } else {
        res.status(401).json({
            msg: 'Invalid long url'
        })
    }
})

module.exports = router