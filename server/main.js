Meteor.publish('users', function() {
    return Meteor.users.find({}, {
        username: 1,
        profile: 1
    })
});

Meteor.publish('markers', function() {
    return Meteor.markers.find({})
});

Meteor.publish('chat', function(gameId) {
    return Conversations.find({})
});