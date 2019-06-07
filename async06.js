const http = require('http')
const async = require('async')
const url = require('url')
const myUrl = process.argv[2]

async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback) {
    http.get(myUrl + '?number=' + item, function(res) {
        var body = ''
        res.on('data', function(chunk) {
            body += chunk.toString()
        })
        res.on('end', function() {
            callback(null, memo + parseInt(body))
        })
    })
}, function(err, results) {
    console.log(results)
})


// var numbers = ['one', 'two', 'three']
// var newUrl = url.parse(myUrl)

// var acc = 0;
// numbers.forEach(function(number) {
//     newUrl.query = {"number" : number}
//     console.log(newUrl)
//     http.get(newUrl, function(res) {
//         res.on('data', function(chunk) {
//             async.reduce([chunk], acc, function(memo, item) {
//                 acc = memo + item
//             })
//         })
//     }).end()
// })

// console.log(acc)