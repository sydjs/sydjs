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

// meetings.push({
//     date: "2011-10-19 18:00:00",
//     speakers: [
//         {name: "", topic: "Speakers TBC"}
//     ]
// });

/***** END OF MEETINGS CONFIG *****/


meetings.sort(function (a, b) {
    var ad = a.date, bd = b.date;
    return ad == bd ? 0 : ad < bd ? -1 : 1;
});

exports.meetings = meetings;