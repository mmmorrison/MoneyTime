if (Meteor.isClient) {
    var MAP_ZOOM = 15;
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    Meteor.startup(function() {
        GoogleMaps.load({
            key: "AIzaSyCHwkmv_U2MS19Yor_FwdOrfxdk_hDQl4Q",
            libraries: "places"
        });
    });
    // var keys = Meteor.settings.public;
    // console.log(keys);

    Template.majorEvents.onCreated(function() {
        var self = this;
        this.counter = new ReactiveVar(0);


        GoogleMaps.ready('majorEvents', function(map) {
            var marker;

            // Create and move the marker when latLng changes.
            self.autorun(function() {
                var latLng = Geolocation.latLng();
                if (!latLng)
                    return;


                // If the marker doesn't yet exist, create it.
                if (!marker) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latLng.lat, latLng.lng),
                        map: map.instance,
                    })
                }
                // The marker already exists, so we'll just change its position.
                else {
                    marker.setPosition(latLng);
                }

                // Center and zoom the map view onto the current position.
                map.instance.setCenter(marker.getPosition());
                map.instance.setZoom(MAP_ZOOM);
            });
        });
    });

    Template.majorEvents.helpers({
        geolocationError: function() {
            var error = Geolocation.error();
            return error && error.message;
        },
        mapOptions: function() {
            var latLng = Geolocation.latLng();
            // Initialize the map once we have the latLng.
            if (GoogleMaps.loaded() && latLng) {
                return {
                    center: new google.maps.LatLng(latLng.lat, latLng.lng),
                    zoom: MAP_ZOOM
                };
            }
        },

        counter: function() {
            return Template.instance().counter.get();
        },

        delays: function() {
            return Events.find({})
        }
    });

    Template.majorEvents.events({
        'click #save': function(e) {
            e.preventDefault();
            var delay = {
                test: $('#delay').val()
            };
            Events.insert({
                username: Meteor.user().username,
                createdAt: new Date().valueOf(),
                coordinates: Geolocation.latLng(),
                expiration: Date.now() + (120 * 60 * 1000)
            });

            Markers.insert({
                lat: Geolocation.latLng().lat,
                lng: Geolocation.latLng().lng
            });
            // console.log(lat, lng);


            $('#eventModal').modal('hide');
        },

        'click #add': function(e) {
            e.preventDefault();
            $('#eventModal').modal('show');
        },

        getAddress: function() {
            var lng = Geolocation.latLng().lng;
            var lat = Geolocation.latLng().lat;
            var real_address = $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat, lng).then(function(payload) {
                $("#address_bucket").append("<li>" + payload.results[0].formatted_address + "</li>");
            });
            $("#no_markers").hide();
        }




    });


}
