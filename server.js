const express = require('express');
const app = new express();
const port = process.env.PORT;

app.get('/', function(req, res) {
    res.send('Hello Express!');
});

app.listen(port, function() {
    console.log("Server listen on port " + port );
});

