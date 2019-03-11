const express = require('express');
const fileDb = require('./initMessage');
const app = express();
const port = 8002;
fileDb.init();

const message = require('./app/messages');

app.use(express.json());
app.use('/message', message);

app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});