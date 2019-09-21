var express = require('express')
var app = express();

var count = 0

app.post('/increment', function (request, response, nextFn) {
    count++
    console.log('The count was increased')
    response.send('The count was increased')
})

app.post('/decrement', function (request, response, nextFn) {
    count--
    console.log('The count was decreased')
    response.send('The count was decreased')
})

app.get('/value', function(request, response, nextFn) {
    console.log('The count is: ' + count)
    response.send('The count is: ' + count)
})

app.listen(3000, function(){
    console.log('Count API is now listening on port 3000...');
})