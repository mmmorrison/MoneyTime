Meteor.publish('users', function() {
    return Meteor.users.find({}, {
        username: 1,
        profile: 1
    })
});

Meteor.publish('markers', function() {
    console.log("my events are " + Events.find({}));
    return Meteor.markers.find({})
});

Meteor.publish('chat', function() {
    return Conversations.find({})
});

Meteor.publish('events', function() {
    return Events.find({})
});