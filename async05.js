const http = require('http')
const async = require('async')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url = "http://" + url1 + ":" + url2 + "/users/create"



async.series({
    requestOne: function(done){
        async.times(5, function(n, next) {
            http.request(url, function(res) {
                console.log("hey")
                res.on('data', function(chunk) {
                    console.log('I got in')

                })
            })
        })
    },
    requestTwo: function(done){
        
    }
  }, function(err, results){
    console.log(results)
  })