const http = require('http')
const async = require('async')
const url1 = process.argv[2]
const url2 = process.argv[3]

async.map([url1, url2], function(item, done){
    var body = ''
    http.get(item, function(res) {
        res.on('data', function(chunk) {
            body += chunk.toString()
        })
        res.on('end', function() {
            done(null, body)
        })
    })
},
function(err, results){
    if (err) 
        return console.log(err)
    console.log(results)
  });