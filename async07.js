const http = require('http')
const async = require('async')
const myUrl = process.argv[2]

var counter = 0
var response = ''
async.whilst(function test(cb) {cb(null, response != 'meerkat')},
    function iter(callback) {
        counter++;
        http.get(myUrl, function(res) {
            var body = ''
            res.on('data', function(chunk) {
                body += chunk.toString()
                //console.log(body)
            })
            res.on('end', function() {
                response = body.trim()
                //console.log(response)
                callback()
            })
        })
    },
    function (err, n) {
        console.log(counter)
    })