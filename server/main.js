

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
