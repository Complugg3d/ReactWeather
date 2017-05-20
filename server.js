const express = require('express');

//Create our app;
var app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Express server is running in the port 3000');
});
