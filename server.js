process.env.TZ = 'Australia/Sydney';

var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/static'));
app.engine('html', require('hjs').__express);
app.set('view engine', 'hjs');

app.get('/timetest', function (req, res) {
    var now = new Date();
    var content = "<h1>Server</h1><p>Rel: " + now.toString() + "</p><p>Abs: " + now.toUTCString() + "</p>";
    res.charset = 'utf8';
    res.send(content);
});

app.get('/', function (req, res) {
    res.render('index.html', getNextMeeting());
});

app.use(function (req, res, next) {
    res.charset = 'utf8';
    res.send(404, '<!doctype html><html lang=en><meta charset=utf-8><title>Not Found</title><style>body{background:#22252a;color:#fff;font:300 100.01% "Helvetica Neue",Helvetica,"Arial Unicode MS",Arial,sans-serif;}h1{font-weight:300;text-align:center;padding:5em;color:#ccf;}</style><body><h1>404<br>Page not found');
});

app.use(function (err, req, res, next) {
    res.charset = 'utf8';
    res.send(500, '<!doctype html><html lang=en><meta charset=utf-8><title>Internal Error</title><style>body{background:#22252a;color:#fff;font:300 100.01% "Helvetica Neue",Helvetica,"Arial Unicode MS",Arial,sans-serif;}h1{font-weight:300;text-align:center;padding:5em;color:#fcc;}</style><body><h1>500<br>Internal Error<p>');
});

app.listen(parseInt(process.env.PORT || 8001, 10));

function getNextMeeting() {
    var meetings = require("./data/meetings").meetings,
        index = meetings.length,
        data, meeting,
        startTime,
        current = meetings[index - 1],
        now = new Date(),
        prevMidnight = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        );
    while (index--) {
        meeting = meetings[index];
        startTime = new Date(meeting.date);
        if (startTime < prevMidnight) {
            break;
        }
        current = meeting;
    }
    startTime = new Date(current.date);
    data = {
        datetime: startTime.toString(),
        datevalue: current.date + '+' + (-startTime.getTimezoneOffset() * 10 / 6),
        presentations: []
    };
    current.speakers.forEach(function (speaker, i) {
        data.presentations.push({
            n: i + 1,
            speaker: speaker.name,
            speakerurl: speaker.twitter ? 'https://twitter.com/' + speaker.twitter : '',
            topic: speaker.topic,
            topicurl: speaker.link || ''
        });
    });
    return data;
}
