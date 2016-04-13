var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

// attach connect-style middleware for response header injection
Meteor.startup(function() {
    connectHandler.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', "*"); // 2592000s / 30 days
        return next();
    })
})


Meteor.publish('users', function() {
    return Meteor.users.find({}, {
        username: 1,
        profile: 1
    })
});

Meteor.publish('markers', function() {
    return Meteor.markers.find({}, {
        lat: 1,
        lng: 1
    })
});

Meteor.publish('chat', function() {
    return Conversations.find({})
});

Meteor.publish('events', function() {
    return Events.find({}, {
        lng: 1,
        lat: 1
    })
});