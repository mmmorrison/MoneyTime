if (Meteor.isClient) {
    var MAP_ZOOM = 15;
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0;
    var contentString = "<div>TEST INFO BOX</div>"

    Meteor.startup(function() {
        GoogleMaps.load({
            key: "AIzaSyCHwkmv_U2MS19Yor_FwdOrfxdk_hDQl4Q",
            libraries: "places"
        });
    });

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

                var infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });

                infowindow.open()

                // If the marker doesn't yet exist, create it.
                if (!marker) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latLng.lat, latLng.lng),
                        map: map.instance,
                        label: labels[labelIndex++ % labels.length],
                        title: 'TEST EVENT TITLE'
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
                coordinates: Geolocation.latLng()
            });

            Markers.insert({
                lat: Geolocation.latLng().lat,
                lng: Geolocation.latLng().lng
            });

            $('#eventModal').modal('hide');
        },

        'click #add': function(e) {
            e.preventDefault();
            $('#eventModal').modal('show');
        }
    });
}