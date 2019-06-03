const http = require('http')
const async = require('async')
var url1 = process.argv[2]
var url2 = process.argv[3]

async.each([url1, url2], function(item, done){
    http.get(item, function(res) {
        res.on('data', function(chunk) {
        })
        res.on('end', function() {
            done(null)
        })
    })
},
function(err){
    if (err) 
        return console.log(err)
  });

