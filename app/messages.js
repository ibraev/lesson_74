const express = require('express');
const fileMessage = require('../initMessage');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.send(fileMessage.getItems())
});

router.post('/',(req, res) => {
    console.log(req.body);
    const date = new Date().toISOString();
    const messageObj = {
        message: req.body.message,
        data: date,
    };

    fs.writeFileSync(`${date}.txt`, JSON.stringify(messageObj));
    res.send(messageObj);
});

module.exports = router;