const http = require('http');
const fs = require('fs')
const url = process.argv[2]
const async = require('async')

     async.waterfall([
       function(cb){
          var body = '';
          http.get('http://localhost:9345', function(res){   // had to change the url, why? url didn't work
           res.on('data', function(chunk){
             body += chunk.toString();
           });
           res.on('end', function(){
             console.log(body)
           });
         }).on('error', function(err) {
           cb(err);
        });
       }
    ], function(err, result){
    if (err) return console.error(err);
    console.log(result);
    });
            
