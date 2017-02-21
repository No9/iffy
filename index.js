var express = require('express');
var app = express();

app.get('/', function (req, res) {
   var rand = (Math.floor(Math.random() * 6) + 1) * 10000000;
   var startTime = Date.now();
   waiter(rand, res, startTime);
});

app.listen(3002, function () {
     console.log('Example app listening on port 3002!');
});

function waiter(rand, res, st) {
   for(var i = 0; i < rand; i++) {
   }   
      var elapsed = Date.now() - st;
      res.send("finally after " + elapsed + ' ms');
}

