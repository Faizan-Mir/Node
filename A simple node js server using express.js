
// In this file we are creating a Server using Express. 
// To access this file, go to cmd, go to your directory and write node <filename>.js
// Then go to your browser to localhost:3000 to access this file. 
// As we have not provided any routes, so this will show a generic 404- Not found page. 



var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

//custom 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - NOT Found');
});

// custom 500 page

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500- Server Error');
});

app.listen(app.get('port'), function(){
    console.log(' Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
}); 
