var express = require('express'),
    http = require('http');
var app = express();

app.configure(function(){
    app.set('title','user-login');
    app.set('port',process.env.PORT || 3000);
    app.use(express.bodyParser());
    });

app.get('/',function(req,res){
    res.send(404,"Not Found");
});


app.get('/user',function(req,res){
    var form = "<!doctype html>"+
                "<html><body><div><form method='POST' action='/edit'><p>Name:<input type='text' name='user'></p><p>Password:<input type='password' name='pass'></p><input type='submit'></form>"+
                "</div></body></html>";
    res.send(form);
});

app.post('/edit',function(req,res){
    res.send(req.body);
});

app.listen(app.get('port'),function(){
    console.log("Server Running at Port:"+app.get('port'));
});