const express = require('express');
const fs = require('fs');

const path = '../messages';
const router = express.Router();

router.get('/',(res, req) => {

   const getMessage = [];

    fs.readdir(path, (err, files) => {
        for (let i = files.length - 5; i < files.length; i++) {
            let message = fs.readFileSync(`${path}/${files[i]}`);
            files.push(JSON.parse(message))
        }
        res.send(getMessage);

    });
});

