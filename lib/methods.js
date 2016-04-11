Meteor.methods({
  setFriend: function(userId) {
      var query = {};
      query[alreadyFriends(userId) ? '$pull' : '$push'] = {
        'profile.friends': userId
      };
      Meteor.users.update(this.userId, query)
    },

  createChat: function () {
      Conversations.insert({
        users: [this.userId],
        messages: [{
          name: 'system',
          text: (new Date).toString()
        }]
      })
    }.bind(this),

  addMessage: function (message) {
    Conversations.update({
      $push: {
        messages: {
          name: Meteor.user().username,
          text: message
        }
      }
    })
  }
})
