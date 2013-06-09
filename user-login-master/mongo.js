var http = require('http'),
   mongo = require('mongoskin');

http.createServer(function (req, res) {

  var conn = mongo.db('mongodb://kiranml1:amruthaluriml1@dharma.mongohq.com:10002/testdb');
  conn.collection('test').find({}).toArray(function(err, items){
    if(err) throw err;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(items));
  });

}).listen(process.env.PORT,process.env.IP);
console.log('Server running...');

// finally mongoskin for mongohq is working