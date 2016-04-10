// if (Meteor.isClient) {
//     Meteor.startup(function() {
//         GoogleMaps.load();
//     });
// };
//
// Template.events.helpers({
//     exampleMapOptions: function() {
//         // Make sure the maps API has loaded
//         if (GoogleMaps.loaded()) {
//             // Map initialization options
//             return {
//                 center: new google.maps.LatLng(41.8701095, -87.6706588),
//                 zoom: 8
//             };
//         }
//     }
// });
//
// // GoogleMaps.loadUtilityLibrary('/path/to/library.js')
//
//
//
// Meteor.startup(function() {
//   GoogleMaps.load({ v: '3', key: "AIzaSyCHwkmv_U2MS19Yor_FwdOrfxdk_hDQl4Q", libraries: 'geometry,places' });
//
// });
