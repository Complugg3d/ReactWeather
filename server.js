const express = require('express');

var port = process.env.PORT | 3000;
//Create our app;
var app = express();

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server is running in the port ${port}`);
});
