var meetings = [];

meetings.push({
    date: "2011-05-18 18:00:00",
    speakers: [
        {name: "Ben Buchanan", topic: "Writing and refactoring for fun and profit"},
        {name: "Paul Theriault", topic: "An Introduction to OWASP"},
        {name: "Filippo Vitale", topic: "Modelling a view of the Model View ViewModel"}
    ]
});

meetings.push({
    date: "2011-06-15 18:00:00",
    speakers: [
        {name: "Jared Wyles", topic: "Looking behind the curtain of jQuery - Part 1"},
        {name: "Jared Wyles", topic: "Looking behind the curtain of jQuery - Part 2"}
    ]
});

meetings.push({
    date: "2011-07-20 18:00:00",
    speakers: [
        {name: "William Parry", topic: "Adding a little shine to your Chrome"},
        {name: "David Peek and Dean Burge", topic: "They're gonna cast a HaXe on you"}
    ]
});

meetings.push({
    date: "2011-08-17 18:00:00",
    speakers: [
        {name: "Simon Swain", topic: "Building a custom Interface with jQueryUI & Raphaël"},
        {name: "John Allsopp", topic: "Offline apps with HTML5"}
    ]
});

meetings.push({
    date: "2011-09-21 18:00:00",
    speakers: [
        {name: "Steve Haffenden", topic: "Everybody loves Strings, an Introduction"},
        {name: "Chris Darroch", topic: "Making testing less testing with Sinon.js"},
        {name: "Dominic Lovell", topic: "What's next for webOS?"},
        {name: "Valery Yushchenko", topic: "Modern Tea Ceremony Powered by Node.js"}
    ]
});

meetings.push({
    date: "2011-10-12 18:00:00",
    speakers: [
        {name: "Various Artists", topic: "Location, Location, Location"}
    ]
});

meetings.push({
    date: "2011-11-16 18:00:00",
    speakers: [
        {name: "Jonathan Creenaune", topic: "A walk through JavaScript's event-driven model"},
        {name: "Brian McKenna", topic: "AltJS - languages that compile to JS"},
        {name: "Adam Ahmed", topic: "Inside large scale applications"},
        {name: "Wesley Walser", topic: "Getting loud about Amplify.js"}
    ]
});

meetings.push({
    date: "2011-12-21 18:00:00",
    speakers: [
        {name: "John Bristowe", topic: "Bringing the Awesome with Kendo UI"},
        {name: "Graeme Merrall", topic: "Everything you wanted to know about Dart"},
        {name: "Jared Wyles", topic: "Missing the Forrest for the trees"},
        {name: "Ben Schwarz", topic: "Never accept no for an answer"}
    ]
});

meetings.push({
    date: "2012-01-18 18:00:00",
    speakers: [
        {name: "Gilmore Davidson", topic: "Ease Yourself Into Animation"},
        {name: "Jared Wyles", topic: "Missing the Forest for the trees"},
        {name: "Nick Hodge and Brendan Forster", topic: "Windows 8 - JavaScript ALL the things"}
    ]
});

meetings.push({
    date: "2012-02-15 18:00:00",
    speakers: [
        {name: "Joseph Gentle", topic: "Porting a 2D physics engine to JavaScript"},
        {name: "Open mic - this could be you!", topic: "JS5M: 5 minute demos of JS gaming libraries"},
        {name: "Gabe Hollombe", topic: "Steam Multiplayer Networking"}
    ]
});

meetings.push({
    date: "2012-03-21 18:00:00",
    speakers: [
        {name: "Earle Castledine", topic: "Deadlines and deprecation - jQuery you can't see"},
        {name: "Marcus and Maddy", topic: "Ninja Blocks - the online world you can see"}
    ]
});

meetings.push({
    date: "2012-04-18 18:00:00",
    speakers: [
        {name: "Simon Swain", topic: "Now you've got two problems... Live data with Node.js"},
        {name: "Lachlan Hardy", topic: "Windows 8 and Websockets, mate!"},
        {name: "Chris Broadfoot", topic: "Big and Beautiful: Data Viz with WebSockets and WebGL"}
    ]
});

meetings.push({
   date: "2012-05-16 18:00:00",
   speakers: [
       {name: "", topic: "Speakers TBC"}
   ]
});

//meetings.push({
//    date: "2012-01-18 18:00:00",
//    speakers: [
//        {name: "", topic: "Speakers TBC"}
//    ]
//});

/***** END OF MEETINGS CONFIG *****/


meetings.sort(function (a, b) {
    var ad = a.date, bd = b.date;
    return ad == bd ? 0 : ad < bd ? -1 : 1;
});

exports.meetings = meetings;
