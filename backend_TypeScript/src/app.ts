import express = require("express");

const bodyParser = require('body-parser');
const { response, reques } = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen((port: number, err: any) => {
    if (err) {
        return console.error(err);
    }
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});