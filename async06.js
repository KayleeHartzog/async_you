const http = require('http')
const async = require('async')
const url1 = process.argv[2]

http.get(url, function(res) {
    async.reduce(['one', 'two', 'three'], 0, function() {

    }, function(err, results) {
        console.log(results)
    })
})