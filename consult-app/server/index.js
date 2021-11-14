const express = require('express');
const router = require('./router.js');
const cors = require('cors');

const app = express();
const PORT = 3001;

app
    .use(cors())
    .use(express.json())
    .use(router);

app.listen(PORT, (err) => {
    if (err) return console.log(err)
    console.log(`the server is listening on ${PORT}`);
})