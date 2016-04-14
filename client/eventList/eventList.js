Template.eventList.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
});


Template.eventList.helpers({
    events() {
        return Events.find({});
    },
    markers() {
        return Markers.find({});
    },

    count() {
        return Events.find({})
            .count()
    },

});


//
// <script>
//   var real_address = $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+{{lat}}+","+{{lng}}+"&sensor=true").then(function(payload){
//     $("#address_bucket").append("<li>"+payload.results[0].formatted_address+"</li>");
//   });
//    $("#no_markers").hide();
// </script>