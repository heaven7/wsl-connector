/**
 * Adding location_id field to related wsl-packages
 */

if(Meteor.startup(function () {
    if(Package['heaven7:wsl-items']) {
        // Schemas.Items = new SimpleSchema([Schemas.Items, WSL.connect.locations]);
        // Schemas.add(Schemas.Items, Items);
    }
}));
