const express = require('express')
const router = express.Router()
const Url = require('../model/url')


// @route   GET /:code
// @desc    Redirect to long/original url
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({
            urlCode: req.params.code
        })


        if (url) {
            return res.redirect(url.longUrl)
        } else {
            res.status(404).json('No Url found')
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error')
    }
})


module.exports = router