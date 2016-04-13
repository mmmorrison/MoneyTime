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