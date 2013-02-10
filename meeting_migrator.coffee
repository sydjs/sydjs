meetings = (require './data/meetings.js').meetings
request = require 'request'
couchUrl = process.env.COUCH_URL
for meeting in meetings
  do (meeting) ->
    meeting.ISOString = new Date(meeting.date).toISOString()
    request.put couchUrl+"/meetings/"+meeting.date, {json: meeting}, (e, r, body) ->
      console.log body
