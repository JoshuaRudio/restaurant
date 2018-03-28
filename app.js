const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
const = process.env.port || 8000;
app.listen(8000);
