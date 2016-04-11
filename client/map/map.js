if (Meteor.isClient) {

    Meteor.startup(() => {
        GoogleMaps.load({
            key: 'AIzaSyAK_vkvxDH5vsqGkd0Qn-dDmq-rShTA7UA',
            libraries: 'places'
        });
        console.log(google);

    });


    Template.map.onRendered(function() {
        this.autorun(() => {
            if (GoogleMaps.loaded()) {
                $('#place2').geocomplete({
                    map: $("#map")
                });
            }
        });

    });

}
