/**
 * WSL connection object.
 * @namespace WSL.connect
 * @type {Object}
 */

WSL.connect = {};

/**
 * Add this to your collection to use locations
 * @type {Object}
 */

WSL.connect.locations = {
    location_id: {
        type: String,
        optional: true,
        regEx: SimpleSchema.RegEx.Id
    }
};

/**
 * Add this to your collection to use items
 * @type {Object}
 */

WSL.connect.items = {
    item_id: {
        type: String,
        optional: true,
        regEx: SimpleSchema.RegEx.Id
    }
};
