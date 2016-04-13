Template.eventList.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
});


Template.eventList.helpers({
    events() {
        return Events.find({});
    },

    count() {
        return Events.find({})
            .count()
    }
});



Template.eventList.helpers({
    events: [{
        _id: 1,
        name: 'This is task 1'
    }, {
        _id: 2,
        name: 'This is task 2'
    }, {
        _id: 3,
        name: 'This is task 3'
    }, ],
});