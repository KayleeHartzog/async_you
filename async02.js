const http = require('http')
const async = require('async')
const url1 = process.argv[2]
const url2 = process.argv[3]

async.series({
    requestOne: function(done){
        var body = ''
        http.get(url1, function(res) {
            res.on('data', function(chunk) {
                body += chunk.toString()
            })
            res.on('end', function() {
                done(null, body)
            })
        })
    },
    requestTwo: function(done){
        var body = ''
        http.get(url2, function(res) {
            res.on('data', function(chunk) {
                body += chunk.toString()
            })
            res.on('end', function() {
                done(null, body)
            })
        })
    }
  }, function(err, results){
    console.log(results)
  })