var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;
var server = new Server('dharma.mongohq.com', 10021, {auto_reconnect: true});
var db = new Db('testdb', server);

db.open(function(err, db) {
  if(!err) {
    console.log("We are connected");
   // assert.equal(null, err);

  // Create a collection
  db.createCollection('test_collections_info', function(err, r) {
    //assert.equal(null, err);

    // Return the information of a single collection name
    db.collectionsInfo("test_collections_info").toArray(function(err, items) {
      //assert.equal(1, items.length);

      // Return the information of a all collections, using the callback format
      db.collectionsInfo(function(err, cursor) {

        // Turn the cursor into an array of results
        cursor.toArray(function(err, items) {
          //assert.ok(items.length > 0);

          db.close();
        });
      })
    });
  });
 }
 });