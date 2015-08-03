/**
 * WSL connection object.
 * @namespace WSL.connect
 * @type {Object}
 */

WSL.connect = {};

/**
 * Add this to your collection to make locations polymorphic
 * @type {Object}
 */

WSL.connect.locations = {
    location_id: {
        type: String,
        optional: true,
        regEx: SimpleSchema.RegEx.Id
    }
};
