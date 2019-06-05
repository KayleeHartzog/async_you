const http = require('http')
const async = require('async')
const url1 = process.argv[2]
const url2 = process.argv[3]

var options = {
    host: url1,
    port: url2,
    path: '/users/create',
    method: 'POST',
};

async.series({
    requestOne: function (done) {
        async.times(5, function (n, next) {
            let body = JSON.stringify({
                user_id: (n + 1)
            });
            http.request(options, function (res) {
                next(null, '');
            }).end(body);
        }, done)
    },
    requestTwo: function (done) {
        options.path = '/users';
        options.method = 'GET';
        let body = '';
        http.get(options, function (res) {
            res.on('data', function (chunk) {
                body += chunk;
            })
            res.on('end', function () {
                done(null, body);
            })
        })
    }
}, function (err, results) {
    if (err)
        console.log(err);
    else
        console.log(results.requestTwo);
})