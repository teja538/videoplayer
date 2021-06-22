var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  //"""for inserting"""
  // var myobj = [

  //   { title: 'Song', url: ' https://www.youtube.com/embed/QN-0UWJHDl4', description:'happy song'},
  //   { title: 'MEAN', url: 'https://www.youtube.com/embed/UYh6EvpQquw', description:'meanstack tutorial'},
  //   { title: 'Art', url: 'https://www.youtube.com/embed/gdSlcxxYAA8', description:'art of code'},
  //   { title: 'Main', url: 'https://www.youtube.com/embed/ZSQuR5LIS2w', description:'service'}

  // ];
  // dbo.collection("videonew").insertMany(myobj, function(err, res) {
  //   if (err) throw err;
  //   console.log("Number of documents inserted: " + res.insertedCount);
  //   db.close();

  //'''''''''delete_one''''''''//
  
    var myquery = { title: /^A/};
  dbo.collection("videonew").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
   
    console.log(obj.result.n + " document(s) deleted");
    db.close();

//''''''''''''update_one'''''''''''''''//
  // var myquery = { address: "Valley 345" };
  // var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document updated");
  //   db.close();
  });
});
