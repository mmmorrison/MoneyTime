if (Meteor.isClient) {

    Meteor.startup(function() {
        GoogleMaps.load({
            key: "AIzaSyCHwkmv_U2MS19Yor_FwdOrfxdk_hDQl4Q",
            libraries: "places",
        });
    });

    Template.map.onCreated(function(input) {
        GoogleMaps.ready('map', function(map) {
            google.maps.event.addListener(map.instance, 'click', function(event) {
                Markers.insert({
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                });
            });

            var markers = {};

            Markers.find().observe({
                added: function(document) {
                    var marker = new google.maps.Marker({
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        position: new google.maps.LatLng(document.lat, document.lng),
                        map: map.instance,
                        id: document._id
                    });

                    google.maps.event.addListener(marker, 'dragend', function(event) {
                        console.log("this inner event is", event);
                        Markers.update(marker.id, {
                            $set: {
                                lat: event.latLng.lat(),
                                lng: event.latLng.lng()
                            }

                        });

                    });

                    markers[document._id] = marker;
                },
                changed: function(newDocument, oldDocument) {
                    markers[newDocument._id].setPosition({
                        lat: newDocument.lat,
                        lng: newDocument.lng
                    });
                },
                removed: function(oldDocument) {
                    markers[oldDocument._id].setMap(null);
                    google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
                    delete markers[oldDocument._id];
                }
            });
        });
    });

    Template.map.helpers({
        mapOptions: function() {
            if (GoogleMaps.loaded({})) {
                return {
                    center: new google.maps.LatLng(41.8701095, -87.6706588),
                    zoom: 4
                };
            }
        }
    });
}