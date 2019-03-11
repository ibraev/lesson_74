const express = require('express');
const fileMessage = require('../initMessage');
const router = express.Router();
const fs = require('fs');
const path = "../messages";



router.get('/', (req, res) => {
    res.send(fileMessage.getItems());
    const getMessages = [];
    fs.readdir(path, (err, files) => {
        for (let i = files.length - 5; i < files.length; i++) {
            let message = fs.readFileSync(`${path}/${files[i]}`);
            getMessages.push(JSON.parse(message))
        }

        res.send(getMessages)

    })
});

router.post('/',(req, res) => {
    const date = new Date().toISOString();
    const messageObj = {
        message: req.body.message,
        data: date,
    };
    const message = ('./messages/');
    fs.writeFileSync( message + `${date}.txt`, JSON.stringify(messageObj));
    res.send(messageObj);
});

module.exports = router;