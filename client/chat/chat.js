// Template.chat.onCreated(function() {
//     this.id = () => FlowRouter.getParam('id');
//     this.subscribe('chat', this.id());
// });
//
// Template.chat.helpers({
//     messages: function() {
//         return Conversations.findOne({
//             chat: Template.instance().id()
//         }).messages;
//     },
//     getClass: function(name) {
//         if (name === 'system') return 'system';
//         if (name === Meteor.user().username) return 'me';
//         return Meter.user().username;
//     }
// });
//
// Template.chat.events({
//     'keypress input': function(evt, instance) {
//         if (evt.keyCode !== 13) return;
//         Meteor.call('addMessage', evt.target.value, instance.id());
//         evt.target.value = '';
//     }
// });